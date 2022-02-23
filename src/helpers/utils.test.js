import { isEmpty, addPlaceholder } from './utils';

describe('isEmpty', () => {
  it('should return true when the value is null, undefined and a empty string', () => {
    const nullCase = null;
    const undefinedCase = undefined;
    const emptyStringCase = '';

    expect(isEmpty(nullCase)).toBeTruthy();
    expect(isEmpty(undefinedCase)).toBeTruthy();
    expect(isEmpty(emptyStringCase)).toBeTruthy();
  });

  it('should return false when the value is not null, undefined or a empty string', () => {
    const stringCase = 'test';

    expect(isEmpty(stringCase)).toBeFalsy();
  });
});

describe('addPlaceholder', () => {
  it('should return default placeholder when this is not provided', () => {
    expect(addPlaceholder(undefined)).toBe('--');
  });

  it('should return provided placeholder when the value is null', () => {
    const customPlaceholder = 'N/A';
    expect(addPlaceholder(undefined, customPlaceholder)).toBe(
      customPlaceholder
    );
  });

  it('should return value when the value is not null', () => {
    const customPlaceholder = 'N/A';
    const customValue = 'test';
    expect(addPlaceholder(customValue, customPlaceholder)).toBe(customValue);
    expect(addPlaceholder(customValue, customPlaceholder)).not.toBe(
      customPlaceholder
    );
  });
});
