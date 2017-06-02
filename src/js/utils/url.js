export const extractQueryString = (url) => {
  const matches = url.match(/\?.*$/);
  return matches ? matches[0] : '';
};

export const removeQueryString = (url) => {
  const matches = url.match(/^(.*)\?/);
  return matches ? matches[1] : url;
};

export const buildQueryStringFromObject = (object) => {
  return Object.keys(object).map((k) => {
    const v = object[k];
    return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
  }).join('&');
};

export const buildQueryStringFromObjectsArray = (objectsArray, keyField = 'name', valueField = 'value') => {
  return objectsArray.map((object) => (
    `${encodeURIComponent(object[keyField])}=${encodeURIComponent(object[valueField])}`
  )).join('&');
};

export const URL = {
  buildQueryStringFromObject,
  buildQueryStringFromObjectsArray,
  extractQueryString,
  removeQueryString,
};

export default URL;
