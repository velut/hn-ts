/**
 * `User` represents a user on HN.
 *
 * @remarks
 * A `User` differs from a `RawUser` as some of its properties are renamed
 * and their values cleaned up.
 *
 * @see {@link RawUser}
 * @see {@link https://github.com/HackerNews/API#users}
 */
export interface User {
  /** Unique, case-sensitive username */
  readonly id: string;

  /**
   * UTC timestamp in ISO 8601 format for when the user was created
   * (for example, `2021-10-02T18:12:10.149Z`)
   */
  readonly createdAt: string;

  /** User's total karma */
  readonly karma: number;

  /** User's profile description */
  readonly about?: string;

  /** List of IDs for the user's submissions */
  readonly submittedIds?: number[];
}
