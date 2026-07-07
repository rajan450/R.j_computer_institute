import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light' | 'dark';
}

export function Section({ children, className, id, bg = 'white' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24',
        bg === 'white' && 'bg-white',
        bg === 'light' && 'bg-brand-light',
        bg === 'dark' && 'bg-brand-dark text-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {subtitle && (
        <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
        {title}
      </h2>
    </div>
  );
}
