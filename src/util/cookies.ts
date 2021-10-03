import Cookies from 'js-cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import next from 'next';
import { parseCookies } from 'nookies';

export const login = (token: string) => {
  Cookies.set('x-admin-token', token, { expires: 999 });
};

export const isLoggedIn = (req: any) => {
  if (!req.cookies) {
    const { token } = parseCookies(req);
    return token !== undefined && token !== null && token !== '';
  }
  const { token } = req.cookies;
  return token;
};
