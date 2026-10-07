import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const logoPath = path.join(root, 'public/brand/logo.png')
const outPath = path.join(root, 'public/og.png')

const width = 1200
const height = 630

const svg = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="32%" cy="48%" r="55%">
      <stop offset="0%" stop-color="#0B6B4F" stop-opacity="0.85"/>
      <stop offset="55%" stop-color="#084536" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#06140F" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#06140F"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <rect x="48" y="48" width="${width - 96}" height="${height - 96}" rx="36" fill="none" stroke="#0B6B4F" stroke-opacity="0.45" stroke-width="2"/>
  <text x="430" y="268" fill="#F4F0E6" font-family="Georgia, serif" font-size="64">KaamTasker</text>
  <text x="430" y="330" fill="#8FD0B6" font-family="Arial, sans-serif" font-size="28">Websites · iOS · Android · software</text>
  <text x="430" y="382" fill="#D5E6DE" font-family="Arial, sans-serif" font-size="20" opacity="0.85">Said CalmTasker / ComTasker · studio, not a marketplace</text>
</svg>
`)

const logo = await sharp(logoPath).resize(280, 280).png().toBuffer()

await sharp(svg)
  .composite([{ input: logo, left: 110, top: 175 }])
  .png()
  .toFile(outPath)

console.log('  Wrote', outPath)
