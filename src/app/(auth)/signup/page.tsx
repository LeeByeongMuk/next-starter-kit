'use client';

import { signIn } from 'next-auth/react';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { fetchSignUp } from '@/app/api/auth';
import ButtonBox from '@/app/components/Auth/Form/ButtonBox';
import EmailInput from '@/app/components/Auth/Form/EmailInput';
import NameInput from '@/app/components/Auth/Form/NameInput';
import NickNameInput from '@/app/components/Auth/Form/NickNameInput';
import PwConfInput from '@/app/components/Auth/Form/PwConfInput';
import PwInput from '@/app/components/Auth/Form/PwInput';
import AuthHeader from '@/app/components/Auth/Header';

interface SignUpInput {
  email: string;
  name: string;
  nickname: string | null;
  password: string;
  passwordConfirmation: string;
}

export default function Signup() {
  const methods = useForm<SignUpInput>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<SignUpInput> = async data => {
    try {
      await fetchSignUp({
        email: data.email,
        name: data.name,
        nickname: data.nickname || null,
        password: data.password,
      });

      alert('Signed up successfully');

      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      });
    } catch {
      alert('Failed to sign up');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <AuthHeader headText="Sign up to your account" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <EmailInput />

            <NameInput />

            <NickNameInput />

            <PwInput />

            <PwConfInput />

            <ButtonBox buttonText="Sign up" />
          </form>
        </div>
      </div>
    </FormProvider>
  );
}
