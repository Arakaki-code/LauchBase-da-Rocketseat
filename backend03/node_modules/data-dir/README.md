<h1 align="center">data-dir</h1>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/mohitsinghs/data-dir/ci?style=flat-square">
  <a href="https://www.npmjs.com/package/data-dir"><img src="https://img.shields.io/npm/v/data-dir.svg?style=flat-square" alt="npm version"></a>
  <img alt="Codecov" src="https://img.shields.io/codecov/c/gh/mohitsinghs/data-dir?style=flat-square">
  <img alt="node-current" src="https://img.shields.io/node/v/data-dir?style=flat-square">
  <a href="https://github.com/mohitsinghs/data-dir/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="license MIT"></a>
</p>
<p align="center">
  <b>Read data from json and yaml files recursively</b><br/>
  <br>
  <br>
</p>

## Install

```sh
npm install data-dir
// or
yarn add data-dir
```

## Uses

For each file the filename becomes the key and data from file becomes value.

```js
const dataDir = require('data-dir')
let obj = dataDir('dir-with-nested-yaml-json') // returns combined data
```
