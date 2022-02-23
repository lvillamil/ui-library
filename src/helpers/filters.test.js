import { List } from 'immutable';

import { getFromOptions } from './filters';

describe('getFromOptions', () => {
  const dummyOptions = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
  ];
  it('should get the correct option from the list based on a plain value', () => {
    const result = getFromOptions(2, dummyOptions);
    expect(result).toEqual({ label: 'Item 2', value: 2 });
  });

  it('should get the correct options from the list based on a Immutable List value', () => {
    const result = getFromOptions(List([3, 4]), dummyOptions);
    expect(result).toEqual([
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4 },
    ]);
  });
});
