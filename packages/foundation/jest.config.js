module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test)\\.ts$",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
};