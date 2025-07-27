import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: PropsWithChildren<TypeButton>) {
    return (
        <button
            className={clsx(`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors`, className)}
            {...props}
        >
            {children}
        </button>
    );
}