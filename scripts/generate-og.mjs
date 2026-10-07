import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'public', 'og.png')
mkdirSync(dirname(out), { recursive: true })

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B6B4F"/>
      <stop offset="55%" stop-color="#084536"/>
      <stop offset="100%" stop-color="#041F18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="980" cy="480" r="220" fill="#D6F56E" fill-opacity="0.18"/>
  <rect x="72" y="72" width="96" height="96" rx="24" fill="#0B6B4F" stroke="#D6F56E" stroke-width="4"/>
  <text x="72" y="260" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="72" font-weight="800">KaamTasker</text>
  <text x="72" y="330" fill="#D6F56E" font-family="Arial, sans-serif" font-size="28" font-weight="600">CalmTasker / ComTasker</text>
  <text x="72" y="400" fill="rgba(255,255,255,0.88)" font-family="Arial, sans-serif" font-size="30">Websites · iOS · Android · Software</text>
  <text x="72" y="540" fill="rgba(255,255,255,0.7)" font-family="Arial, sans-serif" font-size="22">kaamtasker.com · development studio</text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile(out)
console.log('Wrote', out)
