/**
 * `RawUser` represents a user fetched from the HN API as is.
 *
 * @see {@link https://github.com/HackerNews/API#users}
 */
export interface RawUser {
  /** Unique, case-sensitive username */
  readonly id: string;

  /** Unix timestamp in seconds for when the user was created */
  readonly created: number;

  /** User's total karma */
  readonly karma: number;

  /** User's profile description; may contain HTML */
  readonly about?: string;

  /** List of IDs for the user's submissions */
  readonly submitted?: number[];
}
