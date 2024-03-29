'use server';

import { cookies } from 'next/headers';

import { fetchApi } from '@/app/utils/api';

const fetchUser = async () => {
  return await fetchApi('/api/accounts', {
    method: 'GET',
  });
};

interface SignUpReq {
  email: string;
  name: string;
  nickname?: string | null;
  password: string;
}

const fetchSignUp = async (req: SignUpReq) => {
  return await fetchApi('/api/accounts/signup', {
    method: 'POST',
    body: JSON.stringify(req),
  });
};

interface SignInReq {
  email: string;
  password: string;
}

const fetchSignIn = async (req: SignInReq) => {
  const res = await fetchApi('/api/accounts/signin', {
    method: 'POST',
    body: JSON.stringify(req),
  });

  const { access_token } = res.data;
  cookies().set('access_token', access_token, {
    path: '/',
  });

  return res;
};

export { fetchUser, fetchSignUp, fetchSignIn };
export type { SignUpReq };
