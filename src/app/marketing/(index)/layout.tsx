'use client';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <MainLayout disabledSpacing>{children}</MainLayout>;
}
