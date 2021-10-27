import { getRawItemById } from "./get-raw-item-by-id";
import { Item } from "./item";
import { normalizeRawItem } from "./normalize-raw-item";

/**
 * `getItemById` returns the `Item` with the given ID.
 * If the item is not available, `getItemById` returns `undefined`.
 *
 * @example
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
 * @see {@link Item}
 * @see {@link https://github.com/HackerNews/API#items}
 */
export async function getItemById({
  id,
}: {
  id: number;
}): Promise<Item | undefined> {
  const rawItem = await getRawItemById({ id });
  if (!rawItem) {
    return undefined;
  }

  return normalizeRawItem({ rawItem });
}
