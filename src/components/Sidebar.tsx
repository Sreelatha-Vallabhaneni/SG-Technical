import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <SidebarWrapperCss>
      <Image src="/my-bets-x2.png" alt="my bets" width="399" height="1275" />
    </SidebarWrapperCss>
  );
}

const SidebarWrapperCss = styled.div`
  position: absolute;
  top: 68px;
  right: 0;
  width: 440px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 0 ${p => p.theme.sizes.spacing4};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
  background-color: ${p => p.theme.colors.gray300};
`;
