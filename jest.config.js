module.exports = {
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['jsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  testMatch: ['**/*.test.(js|jsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  modulePaths: ['<rootDir>/src'],
};
