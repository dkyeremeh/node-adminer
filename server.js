const path = require('path');
const exec = require('child_process').exec;

(async () => {
  const { default: phpServer } = await import('php-server');
  const server = await phpServer({
    port: process.env.PORT || 8080,
    base: path.resolve(__dirname, 'public'),
    open: true,
  });
  console.log(`PHP server running at ${server.url}`);
})();
