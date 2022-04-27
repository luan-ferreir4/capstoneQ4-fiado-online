export default {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testMatch: ['**/**/*.test.ts'],
};
