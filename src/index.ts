declare const __DEV__: boolean;
const IS_DEV =
  typeof __DEV__ !== "undefined"
    ? __DEV__
    : process.env.NODE_ENV !== "production";

// Utility to format timestamps
const timestamp = () => new Date().toISOString();

// Utility to format objects with indentation
const formatArgs = (args: any[]) => {
  return args.map((arg) =>
    typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg
  );
};

export const devLog = {
  log: (...args: any[]) => {
    IS_DEV && console.log(...args);
  },
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
  // Log with timestamp
  time: (...args: any[]) => {
    IS_DEV && console.log(`[${timestamp()}]`, ...args);
  },
  // Pretty print objects
  pretty: (...args: any[]) => {
    IS_DEV && console.log(...formatArgs(args));
  },
  // Log with custom prefix
  prefix:
    (prefix: string) =>
    (...args: any[]) => {
      IS_DEV && console.log(`[${prefix}]`, ...args);
    },
  // Table view for arrays/objects
  table: (data: any) => {
    IS_DEV && console.table(data);
  },
  // Group logs together
  group: (label: string, fn: () => void) => {
    if (IS_DEV) {
      console.group(label);
      fn();
      console.groupEnd();
    }
  },
  // Trace call stack
  trace: (...args: any[]) => {
    IS_DEV && console.trace(...args);
  },
  // Measure execution time
  measure: async <T>(label: string, fn: () => T | Promise<T>): Promise<T> => {
    if (IS_DEV) {
      console.time(label);
      try {
        const result = await fn();
        console.timeEnd(label);
        return result;
      } catch (error) {
        console.timeEnd(label);
        throw error;
      }
    }
    return fn() as Promise<T>;
  },
};
