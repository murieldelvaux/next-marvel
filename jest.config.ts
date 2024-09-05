import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/tests/**/*test.tsx", "<rootDir>/tests/**/*test.ts"],
  moduleNameMapper: {
    "^@/tests/*": "<rootDir>/tests/$1",
  },
  setupFiles: ["<rootDir>/jest.polyfills.ts"],
  setupFilesAfterEnv: ["<rootDir>/tests/config/reactTestingLibrary.ts"],
};

export default async (): Promise<Config> => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: [
    "/node_modules/(?!node-fetch|data-uri-to-buffer|fetch-blob|formdata-polyfill)",
  ],
});
