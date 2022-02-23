import isValidUrl from './isValidUrl';

describe('isValidUrl', () => {
  it('should be a correct url', () => {
    const url = 'www.correcturl.com';
    expect(isValidUrl(url)).toBe(true);
  });
  it('should be an incorrect url', () => {
    const url = 'ppp.correcturl';
    expect(isValidUrl(url)).toBe(false);
  });
});
