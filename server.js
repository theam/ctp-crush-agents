import http from 'http';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    const payload = { status: 'ok', uptime: process.uptime() };
    const body = JSON.stringify(payload);
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body)
    });
    res.end(body);
    return;
  }

  if (req.method === 'GET' && req.url === '/') {
    const indexPath = join(process.cwd(), 'public', 'index.html');
    if (existsSync(indexPath)) {
      const html = readFileSync(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': Buffer.byteLength(html) });
      res.end(html);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Control Plane');
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
