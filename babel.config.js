module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Expo için gerekli Babel ön ayarı
      plugins: ['react-native-reanimated/plugin'], // Reanimated için gerekli eklenti
    };
  };
  