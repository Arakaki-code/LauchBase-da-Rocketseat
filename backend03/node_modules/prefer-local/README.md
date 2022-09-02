<h1 align="center">prefer-local</h1>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/mohitsinghs/prefer-local/ci?style=flat-square">
  <a href="https://www.npmjs.com/package/prefer-local"><img src="https://img.shields.io/npm/v/prefer-local.svg?style=flat-square" alt="npm version"></a>
  <img alt="node-current" src="https://img.shields.io/node/v/prefer-local?style=flat-square">
  <a href="https://github.com/mohitsinghs/prefer-local/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="license MIT"></a>
</p>
<p align="center">
  <b>Choosing between global and local values</b><br/>
  <sub>Prefers local values over global when choosing between two</sub>
  <br>
</p>

## Install

Install with [npm](https://npm.im/prefer-local)

```bash
npm install prefer-local
// or
yarn add prefer-local
```

## Uses

Useful for places where we need to choose between boolean value of a property inside an object (if exists) and another boolean value and prefer inner property. For Example, while choosing between local option in an object and a global option. If local option is set to `false` returns `false` even if global option is true.

- `src` - source object containing inner property
- `key` - key of the inner property
- `prop` - value of global property
