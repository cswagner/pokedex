module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/assets/images/svgMock.js',
  },
  setupFiles: ['./jestSetup.ts'],
}
