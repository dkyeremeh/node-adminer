#!/usr/bin/env node

const fs = require('fs-extra');
const download = require('download');
const { resolve } = require('path');
const themes = require('./themes.json');

const activeThemePath = 'public/adminer.css';

const getThemePath = (theme) =>
  resolve(__dirname, `public/themes/${theme}.css`);

const activateTheme = async (theme = 'hydra') => {
  const themePath = getThemePath(theme);

  if (!(await fs.exists(themePath))) {
    await downloadTheme(theme);
  }

  console.log('Activating theme:', theme);
  await fs.copy(themePath, activeThemePath);
};

const downloadTheme = async (theme) => {
  const themeUrl = themes[theme];
  const themePath = getThemePath(theme);

  // Invalid theme
  if (!themeUrl) {
    console.log('Invalid theme:', theme);
    process.exit(1);
  }

  if (await fs.exists(themePath)) return;

  console.log('Downloading theme:', theme);
  await download(themeUrl, 'public/themes', { filename: theme + '.css' });
};

const install = () => {
  const adminerSrc =
    'https://github.com/vrana/adminer/releases/download/v4.8.1/adminer-4.8.1-en.php';

  fs.mkdirpSync(resolve(__dirname, 'public/themes'));
  if (fs.existsSync('public/index.php')) return;

  download(adminerSrc).pipe(
    fs.createWriteStream(resolve(__dirname, 'public/index.php'))
  );

  activateTheme('hydra');
};

install();

exports.activateTheme = activateTheme;
