export const ENV = {
  AWS_API: process.env.REACT_APP_AWS_API,
};

export const checkENVValidity = () => {
  Object.keys(ENV).forEach(key => {
    if (ENV[key] === undefined) throw new Error('ENVIRONMENT VARIABLE MISSING');
  });
};