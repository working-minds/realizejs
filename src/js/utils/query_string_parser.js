export function parseFromObject(object) {
  return Object.keys(object).map((k) => {
    const v = object[k];
    return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
  }).join('&');
}

export function parseFromObjectsArray(objectsArray, keyField = 'name', valueField = 'value') {
  return objectsArray.map((object) => (
    `${encodeURIComponent(object[keyField])}=${encodeURIComponent(object[valueField])}`
  )).join('&');
}

export const QueryStringParser = {
  parseFromObject,
  parseFromObjectsArray,
};

export default QueryStringParser;
