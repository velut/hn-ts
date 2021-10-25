import { htmlToText } from "html-to-text";
import { RawUser } from "./raw-user";
import { unixToIsoString } from "./unix-to-iso-string";
import { User } from "./user";

/**
 * `normalizeRawUser` transforms a `RawUser` into a `User`.
 */
export function normalizeRawUser({ rawUser }: { rawUser: RawUser }): User {
  // Convert Unix time in second to UTC timestamp
  const createdAt = unixToIsoString({ time: rawUser.created });

  // Convert `about` from HTML to plain text;
  // for example, see from API https://hacker-news.firebaseio.com/v0/user/velut.json
  // and rendered https://news.ycombinator.com/user?id=velut
  const about = rawUser.about
    ? htmlToText(rawUser.about, { wordwrap: false })
    : undefined;

  return {
    id: rawUser.id,
    createdAt,
    karma: rawUser.karma,
    about,
    submittedIds: rawUser.submitted,
  };
}
