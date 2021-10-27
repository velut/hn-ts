/**
 * This package provides a TypeScript client for the Hacker News API.
 *
 * @remarks
 *
 * @example
 * Get the ID of the latest item created on HN:
 *
 * ```typescript
 * import { getMaxItemId } from 'hn-ts';
 *
 * (async () => {
 *   const id = await getMaxItemId();
 *
 *   // Output: a number like `27107832`
 *   console.log(id);
 * })();
 * ```
 *
 * @example
 * Get the item (story, comment, job, poll or poll option) with the given ID:
 *
 * ```typescript
 * import { getItemById } from 'hn-ts';
 *
 * (async () => {
 *   const item = await getItemById({
 *     id: 27107832,
 *   });
 *
 *   // Output: `27107832`
 *   console.log(item.id);
 *
 *   // Output: `story`
 *   console.log(item.type);
 *
 *   // Output: `velut`
 *   console.log(item.author);
 * })();
 * ```
 *
 * @example
 * Get the user with the given name:
 *
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
 * @see {@link https://news.ycombinator.com/}
 * @see {@link https://github.com/HackerNews/API}
 *
 * @packageDocumentation
 */

export * from "./get-ask-stories-ids";
export * from "./get-best-stories-ids";
export * from "./get-item-by-id";
export * from "./get-job-stories-ids";
export * from "./get-latest-item-and-user-updates";
export * from "./get-max-item-id";
export * from "./get-new-stories-ids";
export * from "./get-raw-item-by-id";
export * from "./get-raw-user-by-id";
export * from "./get-show-stories-ids";
export * from "./get-top-stories-ids";
export * from "./get-user-by-id";
export * from "./hn-api-base-url";
export * from "./item";
export * from "./item-type";
export * from "./raw-item";
export * from "./raw-item-type";
export * from "./raw-user";
export * from "./updated";
export * from "./user";
