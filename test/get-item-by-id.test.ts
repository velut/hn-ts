/** @jest-environment setup-polly-jest/jest-environment-node */
// See https://netflix.github.io/pollyjs/#/test-frameworks/jest-jasmine?id=supported-test-runners

import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import * as path from "path";
import { setupPolly } from "setup-polly-jest";
import { getItemById } from "../src";

describe("getItemById", () => {
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

  it("returns an existing story item", async () => {
    expect.assertions(5);

    const item = await getItemById({ id: 27107832 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(27107832);
    expect(item!.author).toEqual("velut");
    expect(item!.type).toEqual("story");
    expect(item).toMatchSnapshot();
  });

  it("returns an existing comment item", async () => {
    expect.assertions(5);

    const item = await getItemById({ id: 27121843 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(27121843);
    expect(item!.author).toEqual("velut");
    expect(item!.type).toEqual("comment");
    expect(item).toMatchSnapshot();
  });

  it("returns an existing 'ask hn' story item", async () => {
    expect.assertions(5);

    const item = await getItemById({ id: 121003 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(121003);
    expect(item!.type).toEqual("story");
    expect(item!.title!.startsWith("Ask HN")).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it("returns an existing 'show hn' story item", async () => {
    expect.assertions(5);

    const item = await getItemById({ id: 25496976 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(25496976);
    expect(item!.type).toEqual("story");
    expect(item!.title!.startsWith("Show HN")).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it("returns an existing job item", async () => {
    expect.assertions(4);

    const item = await getItemById({ id: 192327 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(192327);
    expect(item!.type).toEqual("job");
    expect(item).toMatchSnapshot();
  });

  it("returns an existing poll item", async () => {
    expect.assertions(4);

    const item = await getItemById({ id: 126809 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(126809);
    expect(item!.type).toEqual("poll");
    expect(item).toMatchSnapshot();
  });

  it("returns an existing poll option item", async () => {
    expect.assertions(4);

    const item = await getItemById({ id: 160705 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(160705);
    expect(item!.type).toEqual("pollopt");
    expect(item).toMatchSnapshot();
  });

  it("returns a deleted item", async () => {
    expect.assertions(4);

    const item = await getItemById({ id: 27121851 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(27121851);
    expect(item!.deleted).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it("returns a dead item", async () => {
    expect.assertions(4);

    const item = await getItemById({ id: 29013059 });

    expect(item).toBeDefined();
    expect(item!.id).toEqual(29013059);
    expect(item!.dead).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it("returns undefined if an item with the given ID is not found", async () => {
    expect.assertions(1);

    const item = await getItemById({ id: 0 });

    expect(item).toBeUndefined();
  });
});
