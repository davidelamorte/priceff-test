class Logger {

  static info = (info) => {
    console.info(info);
  }

  static error = (error) => {
    console.error(error);
  }

  static warning = (warning) => {
    console.warn(warning);
  }

  static log = (log) => {
    console.log(log)
  }
}

export { Logger };
