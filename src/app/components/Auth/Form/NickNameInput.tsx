import React from 'react';
import { useFormContext } from 'react-hook-form';

import ValidationError from '@/app/components/Error/ValidationError';

export default function NickNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor="nickname"
        form="nickname"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        NickName
      </label>
      <div className="mt-2">
        <input
          id="name"
          type="text"
          autoComplete="nickname"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('nickname', {
            required: {
              value: true,
              message: 'NickName is required',
            },
            minLength: {
              value: 2,
              message: 'NickName must be at least 2 characters long',
            },
            maxLength: {
              value: 30,
              message: 'NickName must be at most 30 characters long',
            },
          })}
        />

        <ValidationError
          isError={!!errors.nickname}
          message={errors.nickname?.message?.toString()}
        />
      </div>
    </div>
  );
}
