import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";

/**
 * `getJobStoriesIds` returns the list of up to 200 IDs of the job HN stories.
 *
 * @see {@link https://github.com/HackerNews/API#ask-show-and-job-stories}
 */
export async function getJobStoriesIds(): Promise<number[]> {
  const endpoint = `${hnApiBaseUrl}/jobstories.json`;
  const res = await fetch(endpoint);
  const ids = await res.json();
  return ids;
}
