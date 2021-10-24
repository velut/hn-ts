/**
 * `ItemType` lists the possible item types
 * (`job`, `story`, `comment`, `poll`, or `pollopt`)
 * with `unknown` indicating that a type was not given by the API.
 */
export type ItemType =
  | "job"
  | "story"
  | "comment"
  | "poll"
  | "pollopt"
  | "unknown";
