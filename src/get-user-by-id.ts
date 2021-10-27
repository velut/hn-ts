import { getRawUserById } from "./get-raw-user-by-id";
import { normalizeRawUser } from "./normalize-raw-user";
import { User } from "./user";

/**
 * `getUserById` returns the `User` with the given ID.
 * If the user is not available, `getUserById` returns `undefined`.
 *
 * @example
 * ```typescript
 * import { getUserById } from 'hn-ts';
 *
 * (async () => {
 *   const user = await getUserById({
 *     id: "velut",
 *   });
 *
 *   // Output: `velut`
 *   console.log(user.id);
 * })();
 * ```
 *
 * @see {@link User}
 * @see {@link https://github.com/HackerNews/API#users}
 */
export async function getUserById({
  id,
}: {
  id: string;
}): Promise<User | undefined> {
  const rawUser = await getRawUserById({ id });
  if (!rawUser) {
    return undefined;
  }

  return normalizeRawUser({ rawUser });
}
