/** @jest-environment setup-polly-jest/jest-environment-node */
// See https://netflix.github.io/pollyjs/#/test-frameworks/jest-jasmine?id=supported-test-runners

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import * as path from "path";
import { setupPolly } from "setup-polly-jest";
import { getJobStoriesIds } from "../src";

describe("getJobStoriesIds", () => {
  setupPolly({
    adapters: [NodeHttpAdapter],
    persister: FSPersister,
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "./__recordings__"),
      },
    },
    recordFailedRequests: true,
  });

  it("returns a list of IDs", async () => {
    expect.assertions(2);

    const ids = await getJobStoriesIds();

    expect(ids.length).toBeGreaterThanOrEqual(1);
    expect(ids).toMatchSnapshot();
  });
});
