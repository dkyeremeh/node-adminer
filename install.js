'use strict';

const fs = require('fs-extra');
const download = require('download');
const path = require('path');
const adminerSrc =
    'https://github.com/vrana/adminer/releases/download/v4.7.7/adminer-4.7.7-en.php';
const themeUrl =
    'https://raw.githubusercontent.com/Niyko/Hydra-Dark-Theme-for-Adminer/master/adminer.css';

(async () => {
    await fs.mkdirp(path.resolve(__dirname, 'public'));

    // Exit if file is already downloaded
    if (await fs.exists('public/index.php')) {
        return;
    }

    // Download Adminer and theme
    download(adminerSrc).pipe(
        fs.createWriteStream(path.resolve(__dirname, 'public/index.php'))
    );

    download(themeUrl).pipe(
        fs.createWriteStream(path.resolve(__dirname, 'public/adminer.css'))
    );
})().catch(err => console.log(err));
