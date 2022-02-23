/**
 * Returns a boolean value depends of if we have a valid Address.
 * Like 1577 112th Ave NE, Bellevue, WA 98004, US.
 * @param {string} email
 */
export default function isValidAddress(address) {
  const regexURL = /^.+?,.+?,.+\s\d{5}(-\d{4})?,.+$/;
  return regexURL.test(address);
}
