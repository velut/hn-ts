import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getTopStoriesIds` returns the list of up to 500 IDs of the top HN stories.
 *
 * @see {@link https://github.com/HackerNews/API#new-top-and-best-stories}
 */
export async function getTopStoriesIds(): Promise<number[]> {
  const endpoint = `${hnApiBaseUrl}/topstories.json`;
  const res = await fetch(endpoint);
  const ids = await res.json();
  return ids;
}
