import { AxiosError, HttpStatusCode } from 'axios';

export function mapAxiosError(
    axiosErrorResponse: AxiosError | any,
  ): string {
    const statusCode: HttpStatusCode =
      axiosErrorResponse.response?.request?.status ||
      axiosErrorResponse.response?.status;
    const axiosMessage = axiosErrorResponse.message;

    if (axiosMessage === 'Network Error') {
      return 'Tidak ada Internet';

    }

    if (
      statusCode === HttpStatusCode.BadGateway ||
      statusCode === HttpStatusCode.ServiceUnavailable ||
      statusCode === HttpStatusCode.InternalServerError
    ) {
      return  'Maaf, terjadi kesalahan pada server';

    }

    if (statusCode === HttpStatusCode.BadRequest) {
      return 'Tidak dapat memenuhi permintaan';

    }

    if (
      statusCode === HttpStatusCode.Unauthorized ||
      statusCode === HttpStatusCode.Forbidden
    ) {
      return'Tidak memiliki akses data';
    }

    return 'Data tidak ditemukan';

  }
