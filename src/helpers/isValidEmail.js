/**
 * Returns a boolean value depends of if we have a valid Email.
 * @param {string} email
 */
export default function isValidEmail(email) {
  const regexURL =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexURL.test(email);
}
