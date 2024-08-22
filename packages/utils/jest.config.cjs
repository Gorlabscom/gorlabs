module.exports = {
  rootDir: './src',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [],
  setupFilesAfterEnv: [],
};
