module.exports = {
  testMatch: [
    '<rootDir>/**/*.test.{ts,tsx,js,jsx}',
    '<rootDir>/*.test.{ts,tsx,js,jsx}'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  testEnvironment: 'jsdom'
}
