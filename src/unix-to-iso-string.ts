/** `unixToIsoString` converts a time in Unix seconds to a UTC ISO timestamp */
export function unixToIsoString({ time }: { time: number }): string {
  return new Date(time * 1000).toISOString();
}
