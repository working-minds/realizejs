export const ensureIsArray = (value) => {
  if (value === null || value === undefined || value.length === 0) {
    return [];
  } else if (!Array.isArray(value)) {
    return [value];
  }

  return value;
};

export default {
  ensureIsArray,
};
