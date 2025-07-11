import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  // The corner radius is changed here from rounded-lg to rounded-[6px]
  'inline-flex items-center justify-center rounded-[6px] font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: [
          'text-white',
          'bg-[linear-gradient(225deg,_#373AE5_14.64%,_#3D2CB6)]',
          'hover:bg-[#373AE5]',
          'active:bg-[#1B1D88] active:scale-[.98]',
          'focus:ring-[#292CB7]',
          'disabled:bg-[#747474] disabled:cursor-not-allowed',
        ],
        secondary: [
          'bg-white text-slate-800 border border-slate-300',
          'hover:bg-slate-100',
          'active:scale-[.98]',
          'disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200',
        ],
        tertiary: [
          'bg-transparent border border-digital-900 text-digital-900',
          'hover:bg-digital-50',
          'active:scale-[.98]',
        ],
      },
      size: {
  large: 'h-14 px-4 gap-2 text-m',
  medium: 'h-10 px-3 gap-1.5 text-s', // text-s is 14px
},
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, label, icon, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };