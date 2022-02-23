import { format, formatUTC } from './dates';

describe('format', () => {
  it('should correctly format a date object', () => {
    const formatToken = 'dd/MM/yyyy';
    const date = new Date(2020, 11, 23);
    expect(format(date, formatToken)).toBe('23/12/2020');
  });

  it('should correctly format a date in string representation, same format as the API responses', () => {
    const dateStr = '2020-07-17T19:18:33.985Z';
    const formatToken = 'MM-yyyy';
    expect(format(dateStr, formatToken)).toBe('07-2020');
  });

  it('should throw an error when null value is passed as date', () => {
    const formatToken = 'dd/MMMM/yyyy';
    expect(() => {
      format(null, formatToken);
    }).toThrow('Invalid time value');
  });

  it('should throw an error when empty string is passed as date', () => {
    const formatToken = 'dd/MMMM/yyyy';
    expect(() => {
      format('', formatToken);
    }).toThrow('Invalid time value');
  });
});

describe('formatUTC', () => {
  it('should correctly format a date object', () => {
    const formatToken = 'dd/MM/yyyy HH:mm';
    const date = '2020-10-14T18:35:00.000+00:00';
    expect(formatUTC(date, formatToken)).toBe('14/10/2020 18:35');
  });

  it('should throw an error when null value is passed as date', () => {
    const formatToken = 'dd/MMMM/yyyy';
    expect(() => {
      formatUTC(null, formatToken);
    }).toThrow('Invalid time value');
  });

  it('should throw an error when empty string is passed as date', () => {
    const formatToken = 'dd/MMMM/yyyy';
    expect(() => {
      formatUTC('', formatToken);
    }).toThrow('Invalid time value');
  });
});
