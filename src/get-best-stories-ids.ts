import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getBestStoriesIds` returns the list of up to 500 IDs of the best HN stories.
 *
 * @see {@link https://github.com/HackerNews/API#new-top-and-best-stories}
 */
export async function getBestStoriesIds(): Promise<number[]> {
  const endpoint = `${hnApiBaseUrl}/beststories.json`;
  const res = await fetch(endpoint);
  const ids = await res.json();
  return ids;
}
