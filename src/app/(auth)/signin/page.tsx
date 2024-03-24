'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import ButtonBox from '@/app/components/Auth/Form/ButtonBox';
import EmailInput from '@/app/components/Auth/Form/EmailInput';
import PwInput from '@/app/components/Auth/Form/PwInput';
import Social from '@/app/components/Auth/Form/Social';
import AuthHeader from '@/app/components/Auth/Header';

interface SignInInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();

  const methods = useForm<SignInInput>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<SignInInput> = async data => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push('/');
    } else {
      alert('Failed to sign in');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <AuthHeader headText="Sign in to your account" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <EmailInput />

            <PwInput />

            <ButtonBox buttonText="Sign in" />

            <Social />
          </form>
        </div>
      </div>
    </FormProvider>
  );
}
