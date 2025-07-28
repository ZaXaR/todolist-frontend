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
}
export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ id, label, name, value, placeholder, type, state, extra, isNumber, ...props },
        ref
    ) => {
        return (
            <div className={`mb-4 ${extra}`}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
                <input
                    id={id}
                    ref={ref}
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${state === 'error' ? 'border-red-500' : state === 'success' ? 'border-green-500' : 'border-gray-300'
                        }`}
                    {...props}
                />
            </div>
        );
    });