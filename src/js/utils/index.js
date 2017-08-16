export * as uuid from './uuid';
export * as decorators from './decorators';
export * as ArrayUtils from './array';

export const getProp = (key, obj) => {
  const keyArr = key.split('.');
  let prop = obj;

  try {
    while (keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch (err) {
    return '';
  }

  return prop;
};
