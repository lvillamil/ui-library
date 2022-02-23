import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

export const keyToLabel = (label) =>
  startCase(toLower(label.replace('_', ' ')));

export const getIdsEnumLabel = (enumsIdsMap, id) => {
  if (enumsIdsMap && enumsIdsMap[id]) {
    return keyToLabel(enumsIdsMap[id]);
  }
  return '--';
};
