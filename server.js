const phpServer = require('php-server');
const path = require('path');

(async () => {
    const server = await phpServer({
        port: process.env.PORT || 8080,
        base: path.resolve(__dirname, 'public')
    });
    console.log(`PHP server running at ${server.url}`);
})();
