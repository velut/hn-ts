import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";
import { Updated } from "./updated";

/**
 * `getLatestItemAndUserUpdates` returns the latest updates for items and users.
 *
 * @see {@link https://github.com/HackerNews/API#changed-items-and-profiles}
 */
export async function getLatestItemAndUserUpdates(): Promise<Updated> {
  const endpoint = `${hnApiBaseUrl}/updates.json`;
  const res = await fetch(endpoint);
  const updates = await res.json();
  return updates;
}
