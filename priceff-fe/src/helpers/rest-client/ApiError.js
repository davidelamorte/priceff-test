export default class ApiError extends Error {
   
  constructor(code, message, info) {
    // Calling parent constructor of base Error class.
    super();
    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
    this.data = {
      code: code,
      message: message,
      info: info
    };
  }
};