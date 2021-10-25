import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getNewStoriesIds` returns the list of up to 500 IDs of the newer HN stories.
 *
 * @see {@link https://github.com/HackerNews/API#new-top-and-best-stories}
 */
export async function getNewStoriesIds(): Promise<number[]> {
  const endpoint = `${hnApiBaseUrl}/newstories.json`;
  const res = await fetch(endpoint);
  const ids = await res.json();
  return ids;
}
