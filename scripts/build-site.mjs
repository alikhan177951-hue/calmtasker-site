#!/usr/bin/env node
/**
 * Export a static Namecheap-ready tree from the SiteMD engine.
 *
 * Official `sitemd build` is not a public CLI command in 0.2.2, and
 * `sitemd deploy` / activation require a logged-in sitemd account
 * (`sitemd login`). Until that exists, this script calls the same
 * renderer the SiteMD dev server uses and writes dist/.
 */
import { createRequire } from 'node:module'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sitemdRoot = path.join(projectRoot, 'sitemd')
const dist = path.join(projectRoot, 'dist')
const pkgRoot = path.dirname(require.resolve('@sitemd-cc/sitemd/package.json'))
const engine = path.join(pkgRoot, 'sitemd', 'engine', 'build')

const { syncThemeToCSS } = require(path.join(engine, 'css.js'))
const { build } = require(path.join(engine, 'render.js'))
const { generateFavicons } = require(path.join(engine, 'favicon.js'))
const { generateSearchIndex } = require(path.join(engine, 'search.js'))

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(from, to)
    else fs.copyFileSync(from, to)
  }
}

function stripTrialChrome(html) {
  return html
    .replace(/\s*<div id="sitemd-dev-banner-spacer"[^>]*><\/div>/g, '')
    .replace(/\s*<div id="sitemd-dev-banner"[\s\S]*?<\/div>/g, '')
}

function writePage(urlPath, html) {
  const clean = stripTrialChrome(html)
  if (urlPath === '__404__' || urlPath === '/404') {
    fs.writeFileSync(path.join(dist, '404.html'), clean)
    return
  }
  if (urlPath === '/' || urlPath === '/index') {
    fs.writeFileSync(path.join(dist, 'index.html'), clean)
    return
  }
  const dir = path.join(dist, urlPath.replace(/^\//, ''))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), clean)
}

console.log('  SiteMD engine: rendering KaamTasker from', sitemdRoot)
syncThemeToCSS(sitemdRoot)
const result = build(sitemdRoot)
const memory = result.config._memoryOutput

fs.rmSync(dist, { recursive: true, force: true })
fs.mkdirSync(dist, { recursive: true })

if (memory && memory.size) {
  console.log(`  Trial renderer: writing ${memory.size} page(s) to dist/`)
  for (const [urlPath, html] of memory) writePage(urlPath, html)
} else {
  const out = path.join(sitemdRoot, result.config.outputDir || 'site')
  if (!fs.existsSync(out)) {
    throw new Error('SiteMD produced no memory output and no site/ directory. Official production export needs `sitemd login` + site activation.')
  }
  console.log('  Activated renderer: copying', out, '→ dist/')
  copyDir(out, dist)
}

copyDir(path.join(sitemdRoot, 'theme'), path.join(dist, 'theme'))
fs.rmSync(path.join(dist, 'theme', 'layout.html'), { force: true })
copyDir(path.join(sitemdRoot, 'media'), path.join(dist, 'media'))

try {
  generateSearchIndex(result.pages, result.config, dist)
} catch (err) {
  console.warn('  search-index skipped:', err.message)
}

await generateFavicons(result.config, sitemdRoot, dist).catch((err) => {
  console.warn('  favicons:', err.message)
})

try {
  const og = require(path.join(pkgRoot, 'sitemd', 'engine', 'seo', 'og.js'))
  og.checkDependencies()
  if (result.config.ogImage === 'auto') {
    await og.generateOgImages(result.pages, result.config, dist, sitemdRoot)
  }
} catch (err) {
  console.warn('  og images skipped:', err.message)
}

if (!fs.existsSync(path.join(dist, 'robots.txt'))) {
  fs.writeFileSync(
    path.join(dist, 'robots.txt'),
    'User-agent: *\nAllow: /\n\nSitemap: https://kaamtasker.com/sitemap.xml\n',
  )
}
if (!fs.existsSync(path.join(dist, 'sitemap.xml'))) {
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kaamtasker.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
  )
}

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  throw new Error('SiteMD export failed: dist/index.html was not created.')
}

console.log('  Wrote static site to dist/ (docroot for kaamtasker.com)')
