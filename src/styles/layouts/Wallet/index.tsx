import React, { ReactNode } from 'react';

type LayoutWalletProps = {
  children: ReactNode | ReactNode[];
};

export default function LayoutWallet({ children }: LayoutWalletProps) {
  return <div>{children}</div>;
}
