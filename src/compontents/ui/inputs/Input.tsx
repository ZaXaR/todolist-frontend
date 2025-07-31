import React, { forwardRef } from 'react';

interface IInputProps {
    id: string;
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    type?: string;
    state?: 'default' | 'error' | 'success';
    extra?: string;
    isNumber?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ id, label, name, value, placeholder, type, state, extra, isNumber, ...props },
        ref
    ) => {
        return (
            <div className={`mb-6 ${extra}`}>
  <label htmlFor={id} className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
    {label}
  </label>

  <input
    id={id}
    ref={ref}
    name={name}
    value={value}
    type={type}
    placeholder={placeholder}
    className={`
      w-full px-4 py-2 rounded-xl border backdrop-blur-sm bg-white/70 shadow-sm
      focus:outline-none focus:ring-2 focus:ring-indigo-300
      ${state === 'error' ? 'border-red-500' : state === 'success' ? 'border-green-500' : 'border-white/30'}
    `}
    {...props}
  />
</div>
        );
    });