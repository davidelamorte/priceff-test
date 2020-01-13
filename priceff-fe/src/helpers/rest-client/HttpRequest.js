export default {
  GET: (url = "", options = {}) => {
    const newOptions = {
      method: "GET",
      ...options
    };
    return fetch(url, newOptions);
  },
  POST: (url, options = {}) => {
    const newOptions = {
      method: "POST",
      ...options
    };
    return fetch(url, newOptions);
  },
  PUT: (url, options = {}) => {
    const newOptions = {
      method: "PUT",
      ...options
    };
    return fetch(url, newOptions);
  },
  DELETE: (url, options = {}) => {
    const newOptions = {
      method: "DELETE",
      ...options
    };
    return fetch(url, newOptions);
  }
};
