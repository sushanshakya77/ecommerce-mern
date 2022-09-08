declare namespace Express {
  export interface Request {
    refreshToken: string;
    accessToken: string;
    user: any;
  }
}
