/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
    ],
  };
};
