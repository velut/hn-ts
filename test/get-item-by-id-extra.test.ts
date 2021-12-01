import nock from "nock";
import { getItemById, hnApiBaseUrl } from "../src";

describe("getItemById", () => {
  it("returns an item with only an ID", async () => {
    expect.assertions(3);

    nock(hnApiBaseUrl).get("/item/0.json").reply(200, { id: 0 });

    const item = await getItemById({ id: 0 });

    expect(item!.id).toEqual(0);
    expect(item!.type).toEqual("unknown");
    expect(item).toMatchSnapshot();
  });
});
