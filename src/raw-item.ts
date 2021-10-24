import { RawItemType } from "./raw-item-type";

/**
 * `RawItem` represents an item fetched from the HN API as is.
 *
 * @see {@link https://github.com/HackerNews/API#items}
 */
export interface RawItem {
  /** Unique integer item ID; this is the only required property */
  readonly id: number;

  /** Item type (`job`, `story`, `comment`, `poll`, or `pollopt`) */
  readonly type?: RawItemType;

  /** User who submitted the item */
  readonly by?: string;

  /** Title text for a story, poll or job; may include HTML */
  readonly title?: string;

  /** URL for a story or job */
  readonly url?: string;

  /** Text for a story, comment, poll, poll option or job; may include HTML */
  readonly text?: string;

  /** Unix timestamp in seconds for when the item was created */
  readonly time?: number;

  /** Score for a story, job or poll; votes for a poll option */
  readonly score?: number;

  /** Number of total comments for a story or poll */
  readonly descendants?: number;

  /** Set to `true` if the item is deleted */
  readonly deleted?: boolean;

  /** Set to `true` if the item is dead */
  readonly dead?: boolean;

  /** ID of the parent item of a comment (a story or another comment) */
  readonly parent?: number;

  /** List of IDs of the item's comments, in ranked display order */
  readonly kids?: number[];

  /** ID of the poll associated to a poll option */
  readonly poll?: number;

  /** List of IDs of related poll options, in display order */
  readonly parts?: number[];
}
