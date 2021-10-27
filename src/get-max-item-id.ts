import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getMaxItemId` returns the ID of the most recent item available from the API.
 *
 * @example
 * ```typescript
 * import { getMaxItemId } from 'hn-ts';
 *
 * (async () => {
 *   const id = await getMaxItemId();
 *
 *   // Output: a number like `27107832`
 *   console.log(id);
 * })();
 * ```
 *
 * @see {@link https://github.com/HackerNews/API#max-item-id}
 */
export async function getMaxItemId(): Promise<number> {
  const endpoint = `${hnApiBaseUrl}/maxitem.json`;
  const res = await fetch(endpoint);
  const id = await res.json();
  return id;
}
