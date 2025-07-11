import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Switch = ({ checked, onChange, className }: SwitchProps) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  const switchClasses = twMerge(
    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-digital-500 focus:ring-offset-2',
    checked ? 'bg-digital-500' : 'bg-gray-200',
    className
  );

  const knobClasses = twMerge(
    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
    checked ? 'translate-x-5' : 'translate-x-0'
  );

  return (
    <button
      type="button"
      className={switchClasses}
      role="switch"
      aria-checked={checked}
      onClick={handleToggle}
    >
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={knobClasses} />
    </button>
  );
};