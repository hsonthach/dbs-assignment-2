/**
 * Input: `astring`
 * Precondition:
 * Output: `'astring'`
 * Postcondition:
 * Description: Format value to match with SQL syntax
 * Example:
 * Source:
 * Exception:
 **/
const formatQueryValue = (value) =>
  typeof value == "string" ? `'${value}'` : value;

module.exports = formatQueryValue;
