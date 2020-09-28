'use strict';

module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.js?$': '<rootDir>/jest/jest-preprocess.js',
    '^.+\\.(md|mdx)$': 'jest-transformer-mdx',
  },

  testMatch: ['**/__tests__/**/*.js', '**/?(*.)test.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-plugin-mdx)/)'],
  globals: {
    __PATH_PREFIX__: '',
    __BASE_PATH__: '',
  },
  setupFiles: ['<rootDir>/jest/loadershim.js'],
};
