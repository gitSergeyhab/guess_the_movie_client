export interface IError {
  response: {
    data: {
      message: string,
      errors: string[],
    }
  }
}
