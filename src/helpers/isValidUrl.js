/**
 * Returns a boolean value depends of if we have a valid URL.
 * @param {string} URL
 */
export default function isValidUrl(url) {
  const regexURL =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  return regexURL.test(url);
}
