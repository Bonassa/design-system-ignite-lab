import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...rest } : ButtonProps){
  const Comp = asChild ? Slot : 'button'

  return(
    <Comp className={clsx(
      'px-4 py-3 bg-cyan-500 font-semibold rounded text-black text-sm w-full transition-colors duration-300 hover:bg-cyan-400',
      'focus:ring-2 ring-white',
      className
    )}
      {...rest}
    >
      {children}
    </Comp>
  )
}