/**
 * `Updated` contains the latest changes for items and user profiles.
 *
 * @see {@link https://github.com/HackerNews/API#changed-items-and-profiles}
 */
export interface Updated {
  /** List of IDs for the updated items */
  readonly items: number[];

  /** List of IDs for the updated user profiles */
  readonly profiles: string[];
}
