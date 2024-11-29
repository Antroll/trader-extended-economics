/**
 * Converts a given value to a JSON string with indentation.
 *
 * @param value - The value to be converted to JSON.
 * @returns The JSON string representation of the value, formatted with 2 spaces for indentation.
 */
export function converToJson(value: any): string {
  return JSON.stringify(value, null, 2);
}
