const http = require('http');

const SMETA = {
  vh: [
    "version.ffmax.purplevioleto.com",
    "version.freefiremobile.com",
    "version.ff.garena.com"
  ],
  s_url: "https://loginbp.ppmainecoonabc.com/"
};

const server = http.createServer((req, res) => {
  if (req.url === '/public/smeta') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(SMETA));
    return;
  }
  res.writeHead(404);
  res.end();
});

server.listen(process.env.PORT || 3000, () => {
  console.log('smeta running');
});
