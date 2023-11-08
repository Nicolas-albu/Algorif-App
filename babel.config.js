module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.js', '.json', '.png'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './assets',
          },
        },
      ],
    ],
  }
}
