/**
 * Base HTTP error class with status code.
 * Throw this from route handlers to send specific HTTP errors.
 */
export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = "HttpError";
  }
}

// Convenience constructors
export const BadRequestError = (msg: string): HttpError => new HttpError(400, msg);
export const UnauthorizedError = (msg: string): HttpError => new HttpError(401, msg);
export const ForbiddenError = (msg: string): HttpError => new HttpError(403, msg);
export const NotFoundError = (msg: string): HttpError => new HttpError(404, msg);
