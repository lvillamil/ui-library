import isValidAddress from './isValidAddress';

describe('isValidAddress', () => {
  it('address should be correct', () => {
    const address = '1577 112th Ave NE, Bellevue, WA 98004, US';
    expect(isValidAddress(address)).toBe(true);
  });

  it('address should be incorrect', () => {
    const address = 'super wrong address';
    expect(isValidAddress(address)).toBe(false);
  });
});
