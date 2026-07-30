import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
}

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                "px-6 py-3 font-montserrat cursor-pointer font-semibold text-sm uppercase tracking-wider transition-all duration-300",
                variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
                variant === 'outline' && 'border-2 border-primary bg-primary text-black hover:bg-transparent hover:text-primary',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};