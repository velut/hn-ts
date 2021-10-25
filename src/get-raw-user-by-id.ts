import fetch from "isomorphic-unfetch";
import { hnApiBaseUrl } from "./hn-api-base-url";
import { RawUser } from "./raw-user";

/**
 * `getRawUserById` returns the user with the given ID as is from the API.
 * If the user is not available, `getRawUserById` returns `undefined`.
 *
 * @see {@link RawUser}
 * @see {@link https://github.com/HackerNews/API#users}
 */
export async function getRawUserById({
  id,
}: {
  id: string;
}): Promise<RawUser | undefined> {
  const endpoint = `${hnApiBaseUrl}/user/${id}.json`;
  const res = await fetch(endpoint);
  const rawUserOrNull = await res.json();
  return rawUserOrNull ?? undefined;
}
