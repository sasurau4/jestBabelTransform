module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', { enableBabelRuntime: true }],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
