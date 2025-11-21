// components/common/Button.tsx
import React, { FC, MouseEventHandler } from 'react';

// Define the ButtonProps interface locally if the import fails
interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses: Record<NonNullable<ButtonProps['shape']>, string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  onClick,
  children,
}) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  return (
    <button
      className={`bg-blue-500 text-white hover:bg-blue-600 transition ${sizeClass} ${shapeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;