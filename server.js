const path = require('path');
const exec = require('child_process').exec;

module.exports = async (args) => {
  const { default: phpServer } = await import('php-server');
  const server = await phpServer({
    port: args.port,
    base: path.resolve(__dirname, 'public'),
    open: true,
  });
  console.log(`PHP server running at ${server.url}`);
};
