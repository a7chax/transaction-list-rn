export interface BaseResponse<T> {
    code?: string;
    success?: boolean;
    error?: string;
    message?: string;
    data?: T;
  }
