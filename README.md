# jestBabelTransform

This repository try babel behavior about config when run jest.

## Summary

If you run, `yarn jest` will fail because babel ignore .babelrc.

For more details, https://babeljs.io/docs/en/config-files#6x-vs-7x-babelrc-loading

There are 2 way to fix it.

One is rename `.babelrc` to `babel.config.js`, Another is delete `src/store/package.json`.
