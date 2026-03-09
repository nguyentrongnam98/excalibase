/**
 * Parses the `setComplete` mutation from code to extract the `completed` value.
 * Returns `true`, `false`, or `null` if not found.
 */
export function parseSetCompleteValue(code: string): boolean | null {
  const match = code.match(
    /export\s+const\s+setComplete[\s\S]*?completed\s*:\s*(true|false)/
  );
  return match ? match[1] === "true" : null;
}
