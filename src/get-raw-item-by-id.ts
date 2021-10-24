import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";
import { RawItem } from "./raw-item";

/**
 * `getRawItemById` returns the item with the given ID as is from the API.
 * If the item is not available, `getRawItemById` returns `undefined`.
 *
 * @see {@link RawItem}
 * @see {@link https://github.com/HackerNews/API#items}
 */
export async function getRawItemById({
  id,
}: {
  id: number;
}): Promise<RawItem | undefined> {
  const endpoint = `${hnApiBaseUrl}/item/${id}.json`;
  const res = await fetch(endpoint);
  const rawItemOrNull = await res.json();
  return rawItemOrNull ?? undefined;
}
