declare const __DEV__: boolean;
const IS_DEV =
  typeof __DEV__ !== "undefined"
    ? __DEV__
    : process.env.NODE_ENV !== "production";
export const devLog = {
  debug: (...args: any[]) => {
    IS_DEV && console.debug(...args);
  },
  info: (...args: any[]) => {
    IS_DEV && console.info(...args);
  },
  warn: (...args: any[]) => {
    IS_DEV && console.warn(...args);
  },
  error: (...args: any[]) => {
    IS_DEV && console.error(...args);
  },
};
