/**
 * Simple structured logger.
 * Replace with pino or winston in Phase 9 if needed.
 */
export const logger = {
  info: (...args: unknown[]): void => {
    console.log(" caution ", ...args);
  },
  success: (...args: unknown[]): void => {
    console.log(" valid", ...args);
  },
  warn: (...args: unknown[]): void => {
    console.warn("warning ", ...args);
  },
  error: (...args: unknown[]): void => {
    console.error("error ", ...args);
  },
};