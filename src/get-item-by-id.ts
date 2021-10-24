import { getRawItemById } from "./get-raw-item-by-id";
import { Item } from "./item";
import { normalizeRawItem } from "./normalize-raw-item";

/**
 * `getItemById` returns the `Item` with the given ID.
 * If the item is not available, `getItemById` returns `undefined`.
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
