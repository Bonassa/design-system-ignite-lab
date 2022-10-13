import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild } : ButtonProps){
  const Comp = asChild ? Slot : 'button'

  return(
    <Comp className={clsx(
      'px-4 py-3 bg-cyan-500 font-semibold rounded text-black text-sm w-full transition-colors duration-300 hover:bg-cyan-400',
      'focus:ring-2 ring-white'
    )}>
      {children}
    </Comp>
  )
}