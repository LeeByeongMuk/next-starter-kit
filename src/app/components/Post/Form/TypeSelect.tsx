import React from 'react';
import { useFormContext } from 'react-hook-form';

import { TYPE_OPTIONS } from '@/app/constants/post';

interface Props {
  selectedValue?: string;
}

export default function TypeSelect({ selectedValue }: Props) {
  const { register } = useFormContext();

  return (
    <div className="mt-5">
      <label htmlFor="type" className="block text-xs font-medium text-gray-700">
        Type
      </label>

      <select
        id="type"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        value={selectedValue || ''}
        {...register('type')}
      >
        {TYPE_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
