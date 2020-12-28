/**
 * Input:
 * Precondition:
 * Output:
 * Postcondition:
 * Description: formate output form sql metadata to input of Form.Item
 * Example:
 * Source:
 * Exception:
 **/
import formatType from "./formatType";
const formatMetadata = (metadata) => {
  return metadata.map((meta) => ({
    name: meta.COLUMN_NAME,
    type: formatType(meta.DATA_TYPE),
  }));
};

export { formatMetadata };
