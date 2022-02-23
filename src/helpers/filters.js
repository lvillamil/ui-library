import { List } from 'immutable';

const defaultAccessor = (a) => a;

/**
 * Based on a single value or a list of values, returns
 * the corresponding options from a list of dropdown options or null if not found
 * @param {(string|number| Immutable.List)} value - The value(s) to look for in dropdownOptions
 * @param {Array.<Object>} dropdownOptions
 * @return {Array.<Object>|null}
 *
 * @example
 * getFromOptions(
 *  Immutable.List([1,2]),
 *  [{label: "Item 1", value: 1}, {label: "Item 2", value: 2}, {label: "Item 3", value: 3}]
 * )
 *
 * getFromOptions(
 *  2,
 *  [{label: "Item 1", value: 1}, {label: "Item 2", value: 2}, {label: "Item 3", value: 3}]
 * )
 */

export const getFromOptions = (
  value,
  dropdownOptions,
  accessor = defaultAccessor
) => {
  if (value) {
    if (List.isList(value) && value.size > 0) {
      return dropdownOptions.filter((option) =>
        value.find((valueItem) => {
          return option.value === accessor(valueItem);
        })
      );
    }

    const result = dropdownOptions.find(
      (option) => option.value === accessor(value)
    );
    // Returning new object to avoid mutations
    return result ? { ...result } : null;
  }
  return null;
};
