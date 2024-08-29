export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TResponseSuccess = {
  data: any;
  meta?: TMeta;
};

export type TResponseError = {
  statusCode: number;
  message: string;
  errorMessage: {
    path: string | number;
    message: string;
  }[];
};
