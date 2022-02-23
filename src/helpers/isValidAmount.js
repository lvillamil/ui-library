export default function isValidAmount(amount) {
  const value = amount;
  /**
   * Check if amount is a number first.
   * If the value is a number it will be converted to string and
   * checked against the regex.
   * Valid Input: 0, 5, 1250, 1250.00, 54510234.00,
   * Invalid Input: 1250.0.0.0., 54.2255
   */
  if (Number.isNaN(amount)) {
    value.toString(amount);
  }
  const expression =
    /(^$)|(^[0]{1}$)|(^[1-9]{1}$)|(^([1-9]+[0-9]+([.][0-9]{0,2})?|[.][0-9]+)$)/;
  return expression.test(value);
}

export function isCompleteAmount(amount) {
  const value = amount;
  if (Number.isNaN(amount)) {
    value.toString(amount);
  }
  const expression =
    /(^$)|(^[0]{1}$)|(^[1-9]{1}$)|(^([1-9]+[0-9]+([.][0-9]{1,2})?|[.][0-9]+)$)/;
  return expression.test(value);
}
