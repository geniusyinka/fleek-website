import { cn } from '@utils/cn';
import type { PropsWithChildren } from 'react';
import type React from 'react';

export const Layout: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLElement>
> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'mx-auto flex w-full max-w-[590px] flex-col gap-38 font-plex-sans text-14 [scrollbar-gutter:stable] sm:pb-64 sm:pt-32',
        className,
      )}
      ref={(node) => {
        if (node) {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </main>
  );
};
