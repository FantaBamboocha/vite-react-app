/** @type {import('jest').Config} */
// const config = {
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
//   transform: {
//     "^.+\\.(js|jsx)$": "babel-jest",
//   },
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   moduleNameMapper: {
//     "^.+\\.svg$": "jest-svg-transformer",
//     "^.+\\.css$": "identity-obj-proxy",
//   },
// };

// export default config;

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup-test.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.scss$": "jest-transform-stub",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css | scss)$": "identity-obj-proxy",
  },
};
