import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getMaxItemId` returns the ID of the most recent item available from the API.
 *
 * @see {@link https://github.com/HackerNews/API#max-item-id}
 */
export async function getMaxItemId(): Promise<number> {
  const endpoint = `${hnApiBaseUrl}/maxitem.json`;
  const res = await fetch(endpoint);
  const id = await res.json();
  return id;
}
