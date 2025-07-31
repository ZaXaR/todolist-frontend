import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: PropsWithChildren<TypeButton>) {
  return (
    <button
      className={clsx(
        'inline-block rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
