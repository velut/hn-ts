import { ItemType } from "./item-type";

/**
 * `Item` represents an HN item.
 *
 * @remarks
 * An `Item` differs from a `RawItem` as some of its properties are renamed
 * and their values cleaned up.
 *
 * @see {@link RawItem}
 * @see {@link https://github.com/HackerNews/API#items}
 */
export interface Item {
  /** Unique integer item ID */
  readonly id: number;

  /** Item type (`job`, `story`, `comment`, `poll`, `pollopt` or `unknown`) */
  readonly type: ItemType;

  /** User who submitted the item */
  readonly author?: string;

  /** Title text for a story, poll or job */
  readonly title?: string;

  /** URL for a story or job */
  readonly url?: string;

  /** Text for a story, comment, poll, poll option or job */
  readonly text?: string;

  /**
   * UTC timestamp in ISO 8601 format for when the item was created
   * (for example, `2021-10-02T18:12:10.149Z`)
   */
  readonly timestamp?: string;

  /** Score for a story, job or poll; votes for a poll option */
  readonly score?: number;

  /** Number of total comments for a story or poll */
  readonly numChildren?: number;

  /** Set to `true` if the item is deleted */
  readonly deleted: boolean;

  /** Set to `true` if the item is dead */
  readonly dead: boolean;

  /** ID of the parent item of a comment (a story or another comment) */
  readonly parentId?: number;

  /** List of IDs of the item's comments, in ranked display order */
  readonly childrenIds?: number[];

  /** ID of the poll associated to a poll option */
  readonly pollId?: number;

  /** List of IDs of related poll options, in display order */
  readonly pollOptionsIds?: number[];
}
