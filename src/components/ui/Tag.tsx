import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const tagVariants = cva(
  // The change from font-medium to font-normal is here
  'inline-flex items-center h-6 px-1x text-s font-normal rounded-sm',
  {
    variants: {
      variant: {
        primary: 'bg-digital-500 text-white',
        'on-image': 'bg-black/60 text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface TagProps extends VariantProps<typeof tagVariants> {
  label: string;
  className?: string;
}

export const Tag = ({ className, variant, label }: TagProps) => {
  return (
    <div className={twMerge(tagVariants({ variant, className }))}>
      {label}
    </div>
  );
};