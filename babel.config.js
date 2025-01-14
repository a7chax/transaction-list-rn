module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins : [
    ['module:react-native-dotenv', {
      envName : 'APP_ENV',
      moduleName : '@env',
      path: '.env',
      allowUndefined: false,
    }],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets/',
          '@component': './src/Component/',
          '@core': './src/core/',
          '@ModuleTransaction': './src/Module/Transaction/',
        },
      },
    ],
  ],
};
