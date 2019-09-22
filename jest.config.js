module.exports = {
  name: "serverless-typescript-starter",
  preset: "ts-jest",
  automock: false,
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  testPathIgnorePatterns: ["dist/.*"],
}
