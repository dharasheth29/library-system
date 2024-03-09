module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/*.test.(ts|js)"],
  testEnvironment: "node",
  preset: "ts-jest",
  collectCoverage: true,
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "../../../coverage/apps/library-api",
};
