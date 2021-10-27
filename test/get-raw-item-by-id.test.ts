/** @jest-environment setup-polly-jest/jest-environment-node */
// See https://netflix.github.io/pollyjs/#/test-frameworks/jest-jasmine?id=supported-test-runners

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import * as path from "path";
import { setupPolly } from "setup-polly-jest";
import { getRawItemById } from "../src";

describe("getRawItemById", () => {
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

  it("returns an existing item", async () => {
    expect.assertions(4);

    const item = await getRawItemById({ id: 27107832 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(27107832);
    expect(item!.by).toEqual("velut");
    expect(item).toMatchSnapshot();
  });

  it("returns undefined if an item with the given ID is not found", async () => {
    expect.assertions(1);

    const item = await getRawItemById({ id: 0 });

    expect(item).toBeUndefined();
  });
});
