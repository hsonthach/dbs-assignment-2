/**
 * Input:
 * Precondition:
 * Output:
 * Postcondition:
 * Description: Generate mySQL command
 * Example:
 * Source:
 * Exception:
 **/

const formatQueryValue = require("./utils/formatQueryValue");

const selectTable = (tableName) => `SELECT * FROM ${tableName} `;

const getColumnNameAndType = (tableName, schemaName) =>
  `select column_name,data_type from information_schema.columns where table_schema = ${schemaName} and table_name = ${tableName}`;

const insertRecord = (tableName, keys, values) =>
  `INSERT INTO ${tableName} (${keys.join(", ")})
VALUES (${values.map((value) => formatQueryValue(value)).join(", ")})`;

module.exports = {
  selectTable,
  getColumnNameAndType,
  insertRecord,
};
