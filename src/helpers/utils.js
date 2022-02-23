export const DEFAULT_PLACEHOLDER = '--';
export const isEmpty = (value) =>
  value === null || value === undefined || value === '';
/**
 *
 * @param {any} value
 * @param {string} [customPlaceholder]
 */
export const addPlaceholder = (value, customPlaceholder) => {
  const placeholder = customPlaceholder || DEFAULT_PLACEHOLDER;
  return isEmpty(value) ? placeholder : value;
};
export const getAcronym = (val) => val.match(/\b\w/g).join('');
