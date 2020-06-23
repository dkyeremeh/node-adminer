'use strict';

const fs = require('fs-extra');
const download = require('download');
const path = require('path');
const adminerSrc =
    'https://github.com/vrana/adminer/releases/download/v4.7.7/adminer-4.7.7-en.php';
const themeUrl =
    'https://raw.githubusercontent.com/Niyko/Hydra-Dark-Theme-for-Adminer/master/adminer.css';

fs.mkdirp('public');

// Download Adminer
download(adminerSrc).pipe(
    fs.createWriteStream(path.resolve(__dirname, 'public/index.php'))
);

// Download theme
download(themeUrl).pipe(
    fs.createWriteStream(path.resolve(__dirname, 'public/adminer.css'))
);
