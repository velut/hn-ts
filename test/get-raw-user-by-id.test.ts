/** @jest-environment setup-polly-jest/jest-environment-node */
// See https://netflix.github.io/pollyjs/#/test-frameworks/jest-jasmine?id=supported-test-runners

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import * as path from "path";
import { setupPolly } from "setup-polly-jest";
import { getRawUserById } from "../src";

describe("getRawUserById", () => {
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

  it("returns an existing user", async () => {
    expect.assertions(3);

    const user = await getRawUserById({ id: "velut" });

    expect(user).toBeDefined();
    expect(user!.id).toEqual("velut");
    expect(user).toMatchSnapshot();
  });

  it("returns undefined if a user with the given ID is not found", async () => {
    expect.assertions(1);

    const user = await getRawUserById({ id: "velut__________does_not_exist" });

    expect(user).toBeUndefined();
  });
});
