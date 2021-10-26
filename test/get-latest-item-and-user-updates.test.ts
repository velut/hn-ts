/** @jest-environment setup-polly-jest/jest-environment-node */
// See https://netflix.github.io/pollyjs/#/test-frameworks/jest-jasmine?id=supported-test-runners

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import * as path from "path";
import { setupPolly } from "setup-polly-jest";
import { getLatestItemAndUserUpdates } from "../src";

describe("getLatestItemAndUserUpdates", () => {
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

  it("returns the latest updates", async () => {
    expect.assertions(3);

    const updated = await getLatestItemAndUserUpdates();
    const { items, profiles } = updated;

    expect(items.length).toBeGreaterThanOrEqual(1);
    expect(profiles.length).toBeGreaterThanOrEqual(1);
    expect(updated).toMatchSnapshot();
  });
});
