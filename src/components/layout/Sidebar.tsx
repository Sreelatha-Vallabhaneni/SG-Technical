
'use client';

import Image from 'next/image';
import Overlay from '../ui/Overlay';
import { Wrapper, CloseButton } from './Sidebar.styles';
import { SidebarProps } from '@src/typings/layout-components';

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <Wrapper>
        <CloseButton onClick={onClose}>✕</CloseButton>

        <Image
          src="/my-bets-x2.png"
          alt="my bets"
          width={399}
          height={1275}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Wrapper>
    </>
  );
}