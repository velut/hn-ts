import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getShowStoriesIds` returns the list of up to 200 IDs of the "Show HN" stories.
 *
 * @see {@link https://github.com/HackerNews/API#ask-show-and-job-stories}
 */
export async function getShowStoriesIds(): Promise<number[]> {
  const endpoint = `${hnApiBaseUrl}/showstories.json`;
  const res = await fetch(endpoint);
  const ids = await res.json();
  return ids;
}
