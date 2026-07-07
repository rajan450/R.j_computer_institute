import { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-2xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
          {
            'bg-brand-primary text-white hover:bg-brand-dark shadow-lg shadow-brand-primary/30': variant === 'primary',
            'bg-brand-dark text-white hover:bg-brand-dark/90': variant === 'secondary',
            'border border-brand-border text-brand-text hover:bg-gray-50': variant === 'outline',
            'text-brand-text hover:bg-brand-light': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-7 py-2.5 text-[15px]': size === 'md',
            'px-10 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
