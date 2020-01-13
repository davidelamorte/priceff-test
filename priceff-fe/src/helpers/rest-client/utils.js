/**
 * Convert an object to query string
 * @param {Object} obj - the object to convert
 */
export const toQueryString = (obj) => (
  Object.keys(obj)
    .reduce((s, e, i) =>
      `${s}${i !== 0 ? '&' : ''}${e}=${encodeURIComponent(obj[e])}`
    , '?')
);