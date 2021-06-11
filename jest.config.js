module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/lib/setup-tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'src/lib'],
  moduleNameMapper: {
    '@/components/(.*)': ['<rootDir>/src/components/$1'],
    '@/lib/(.*)': ['<rootDir>/src/lib/$1'],
    '@/pages/(.*)': ['<rootDir>/src/pages/$1'],
  },
}
