import { format as formatFn, parseISO, isDate, addMinutes } from 'date-fns';
import { toMomentObject } from 'react-dates';

export const formatDateToMoment = (date) => toMomentObject(date);

export const format = (date, formatToken) =>
  formatFn(isDate(date) ? date : parseISO(date), formatToken);

/**
 * Format a given date with a given format but without applying local time, preserving UTC time
 * @param {Date|string} date a date object or a date as string
 * @param {string} formatToken desire format for the given date
 * @returns {string} a formatted date
 */
export const formatUTC = (date, formatToken) => {
  const dateParsed = isDate(date) ? date : parseISO(date);

  return formatFn(
    addMinutes(dateParsed, dateParsed.getTimezoneOffset()),
    formatToken
  );
};

export default format;
