module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test)\\.(ts|tsx)$",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
