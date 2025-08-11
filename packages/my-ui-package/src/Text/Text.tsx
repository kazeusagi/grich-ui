'use client';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color?: string;
};

export function Text({ children, color }: Props) {
  return <p style={{ color }}>{children}</p>;
}
