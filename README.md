# jestBabelTransform

This repository try babel behavior about config when run jest.

## Summary

### On master
If you run, `yarn jest` will fail because babel ignore .babelrc.

For more details, https://babeljs.io/docs/en/config-files#6x-vs-7x-babelrc-loading

There are 2 way to fix it.

One is rename `.babelrc` to `babel.config.js`, Another is delete `src/store/package.json`.

### On test-vector-icons branch

Fix run jest error of `TypeError: Cannot read property 'default' of undefined` at create-icon-set.js in react-native-vector-icons.

metro-react-native-babel-preset@0.48.0 added enableBabelRuntime option.

This cause metro-react-native-babel-preset@0.48.0 need react-native@0.57.3.

For more details, read belows.
- https://github.com/facebook/metro/releases/tag/v0.48.0
- https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md#0573

