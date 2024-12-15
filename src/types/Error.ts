export interface CustomError extends Error {
  customCode?: number;
  statusCode?: number;
}
