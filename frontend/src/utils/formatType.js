/**
 * Input: String
 * Precondition:
 * Output:String
 * Postcondition:
 * Description: Format type form sql metadata output to input of Form.Item's type
 * Example:
 * Source:
 * Exception:
 **/
const formatType = (type) => {
  switch (type) {
    case "int":
      return "number";
    case "varchar":
      return "string";
    case "date":
      return "date";
    default:
      return type;
  }
};

export default formatType;
