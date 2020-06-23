const phpServer = require('php-server');
const path = require('path');
const exec = require('child_process').exec
const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');

(async () => {
    const server = await phpServer({
        port: process.env.PORT || 8080,
        base: path.resolve(__dirname, 'public')
    });
    console.log(`PHP server running at ${server.url}`);
    exec(`${start} ${server.url}`);
})();
