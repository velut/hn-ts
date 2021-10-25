import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getAskStoriesIds` returns the list of up to 200 IDs of the "Ask HN" stories.
 *
 * @see {@link https://github.com/HackerNews/API#ask-show-and-job-stories}
 */
export async function getAskStoriesIds(): Promise<number[]> {
  const endpoint = `${hnApiBaseUrl}/askstories.json`;
  const res = await fetch(endpoint);
  const ids = await res.json();
  return ids;
}
