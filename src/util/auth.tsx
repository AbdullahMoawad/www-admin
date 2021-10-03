import nextCookie from 'next-cookies';
import React from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { isBrowser } from './browser';
import Cookies from 'js-cookie';

export const logout = () => {
  Cookies.remove('token');
  // To trigger the event listener we save some random data into the `logout` key
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('logout', Date.now().toString()); // new
  }
};

export const ResetOption = (option: any) => {
  if (isBrowser) {
    window.localStorage.removeItem('option_' + option);
  }
};

export const logoutAdmin = () => {
  Cookies.remove('admin_token');
  // To trigger the event listener we save some random data into the `logout` key
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('logout', Date.now().toString()); // new
  }
};

export const loginAdmin = (token: any) => {
  Cookies.set('admin_token', token, { expires: 1 });
};

export const isLoggedInAdmin = (router: any) => {
  const cookies = parseCookies(router);
  const token = cookies.admin_token;
  return token !== undefined && token !== null && token !== '';
};

export const auth = (ctx: any) => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/login');
  }

  return token;
};

export const withAdminAuthSync = (
  WrappedComponent: any,
  requireAuth = true,
) => {
  const Wrapper = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: any) => {
    const { admin_token } = nextCookie(ctx);

    const isLogged = isLoggedInAdmin(ctx);
    if (requireAuth && !isLogged) {
      if (ctx.req) {
        ctx.res.writeHead(302, { Location: '/login' });
        ctx.res.end();
        return; // should be added IMO.
      } else {
        await Router.push('/login');
      }
    }

    if (!requireAuth && isLogged) {
      if (ctx.req) {
        ctx.res.writeHead(302, { Location: '/' });
        ctx.res.end();
        return; // should be added IMO.
      } else {
        await Router.push('/');
      }
    }

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token: admin_token, isLogged: isLogged };
  };

  return Wrapper;
};
