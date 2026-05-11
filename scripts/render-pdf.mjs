import { chromium } from 'playwright'
import { createServer } from 'http'
import { readFileSync, createReadStream } from 'fs'
import { join, extname } from 'path'

const PORT = 54621
const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
}

const server = createServer((req, res) => {
  let path = req.url === '/' ? '/index.html' : req.url
  const file = join(import.meta.dirname, '..', 'dist', path)
  try {
    const ext = extname(file)
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
    createReadStream(file).pipe(res)
  } catch {
    res.writeHead(404)
    res.end()
  }
})

await new Promise(resolve => server.listen(PORT, resolve))
console.log(`Server running on http://localhost:${PORT}`)

const browser = await chromium.launch()
const page = await browser.newPage()

await page.setViewportSize({ width: 1280, height: 800 })

await page.addInitScript(() => {
  localStorage.setItem('theme', 'light')
})

await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' })

await page.waitForTimeout(1000)

await page.pdf({
  path: join(import.meta.dirname, '..', 'public', 'resume.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '40px', bottom: '40px' },
})

await browser.close()
await new Promise(resolve => server.close(resolve))
console.log('PDF generated: public/resume.pdf')
