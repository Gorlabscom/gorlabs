module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@gorlabs|utils)/)', // Add any other packages here
  ],
  moduleNameMapper: {
    '^@gorlabs/(.*)$': '<rootDir>/../utils/src/helpers', // Adjust this according to your monorepo structure
  },
};
