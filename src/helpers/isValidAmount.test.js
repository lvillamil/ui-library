import isValidAmount, { isCompleteAmount } from './isValidAmount';

describe('isValid amount', () => {
  it('should allow for empty', () => {
    expect(isValidAmount('')).toBe(true);
  });
  it('should allow for zero', () => {
    expect(isValidAmount('0')).toBe(true);
  });
  it('should return false when the number starts with 0', () => {
    expect(isValidAmount('05')).toBe(false);
  });
  it('should return true when given a valid string amount ', () => {
    expect(isValidAmount('500')).toBe(true);
  });
  it('should return true when given a valid number amount ', () => {
    expect(isValidAmount(500)).toBe(true);
  });
  it('should allow for partial incomplete amounts', () => {
    expect(isValidAmount('500.')).toBe(true);
  });
});

describe('isCompleteAmount amount', () => {
  it('should return true when given a valid string amount ', () => {
    expect(isCompleteAmount('500')).toBe(true);
  });
  it('should return true when given an amount with one decimal', () => {
    expect(isCompleteAmount('500.0')).toBe(true);
  });
  it('should return false when given an incomplete amount', () => {
    expect(isCompleteAmount('500.')).toBe(false);
  });
  it('should return true with 0', () => {
    expect(isCompleteAmount('0')).toBe(true);
  });
  it('should return false with 05', () => {
    expect(isCompleteAmount('05')).toBe(false);
  });
});
