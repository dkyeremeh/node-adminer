# Adminer for Nodejs

The easy to run Adminer version using NPM.

Adminer is a is a full-featured database management tool. It is compatible with MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, MongoDB and others via plugi

## Installation

It is recommended to intall this package globally so you can launch it from anywhere on your system

```bash
yarn global add adminer-node
# Or use npm
npm i -g adminer-node


```

## Usage

Run `adminer` or `adminer-node` from any part of your system after installation

```bash
# Launch adminer in the browser. Default port is 8080
adminer

# Run adminer on port 9090
adminer 9090

# Get help
adminer --help
```

## Theme Support

This package support multiple themes out of the box. To change the theme being used, run the command with -t or --theme option as shown below.

```bash
# Run with the flat theme
adminer -t flat

# Run with rmsoft-blue theme
adminer -t rmsoft-blue
```

**Note: Any theme you use becomes the default. So you don't need to specify a theme for subsequent usage**

View all [supported themes](https://www.adminer.org/en/#extras).
