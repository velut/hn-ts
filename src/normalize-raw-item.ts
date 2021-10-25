import { htmlToText } from "html-to-text";
import { Item } from "./item";
import { ItemType } from "./item-type";
import { RawItem } from "./raw-item";
import { unixToIsoString } from "./unix-to-iso-string";

/**
 * `normalizeRawItem` transforms a `RawItem` into an `Item`.
 */
export function normalizeRawItem({ rawItem }: { rawItem: RawItem }): Item {
  // Make `type` not null
  const type: ItemType = rawItem.type ?? "unknown";

  // Convert Unix time in seconds to UTC timestamp
  const timestamp = rawItem.time
    ? unixToIsoString({ time: rawItem.time })
    : undefined;

  // Make `deleted` and `dead` not null
  const deleted = rawItem.deleted ?? false;
  const dead = rawItem.dead ?? false;

  // Convert `title` and `text` from HTML to plain text;
  // for example, see from API https://hacker-news.firebaseio.com/v0/item/24753101.json
  // and rendered https://news.ycombinator.com/item?id=24753101
  const title = rawItem.title
    ? htmlToText(rawItem.title, { wordwrap: false })
    : undefined;
  const text = rawItem.text
    ? htmlToText(rawItem.text, { wordwrap: false })
    : undefined;

  return {
    id: rawItem.id,
    type,
    author: rawItem.by,
    title,
    url: rawItem.url,
    text,
    timestamp,
    score: rawItem.score,
    numChildren: rawItem.descendants,
    deleted,
    dead,
    parentId: rawItem.parent,
    childrenIds: rawItem.kids,
    pollId: rawItem.poll,
    pollOptionsIds: rawItem.parts,
  };
}
