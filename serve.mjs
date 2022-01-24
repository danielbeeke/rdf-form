import esbuild from '@netlify/esbuild'
import buildConfig from './buildConfig.mjs'
import http from 'http'
import url from 'url'
import path from 'path'
import fs from 'fs'

esbuild.serve({
  servedir: 'build',
}, buildConfig).then(result => {
  const { host, port } = result

  // Then start a proxy server on port 3000
  http.createServer((req, res) => {
    const options = {
      hostname: host,
      port: port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    }

    // parse URL
    const parsedUrl = url.parse(req.url);

    if (parsedUrl.pathname === '/') parsedUrl.pathname = '/index.html'

    // extract URL path
    let pathname = `demo/.${parsedUrl.pathname}`;
    // based on the URL path, extract the file extension. e.g. .js, .doc, ...
    const ext = path.parse(pathname).ext;
    // maps file extension to MIME typere
    const map = {
      '.ico': 'image/x-icon',
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.wav': 'audio/wav',
      '.mp3': 'audio/mpeg',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.doc': 'application/msword'
    };

    fs.exists(pathname, function (exist) {
      console.log(pathname, exist)

      if(!exist) {
        options.path = options.path.replace('/js', '')

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, proxyRes => {

          // If esbuild returns "not found", send a custom 404 page
          if (proxyRes.statusCode === 404) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>A custom 404 page</h1>');
            return;
          }

          // Otherwise, forward the response from esbuild to the client
          res.writeHead(proxyRes.statusCode, proxyRes.headers);
          proxyRes.pipe(res, { end: true });
        });

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true });


        return;
      }

      // if is a directory search for index file matching the extension
      if (fs.statSync(pathname).isDirectory()) pathname += 'index' + ext;

      // read file from file system
      fs.readFile(pathname, function(err, data){
        if(err){
          res.statusCode = 500;
          res.end(`Error getting the file: ${err}.`);
        } else {
          // if the file is found, set Content-type and send data
          res.setHeader('Content-type', map[ext] || 'text/plain' );
          res.end(data);
        }
      });
    });
  }).listen(8070);
});