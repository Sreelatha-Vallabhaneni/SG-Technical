import { Clickable } from '@src/typings/layout-components';
import styled from 'styled-components';

const Overlay = styled.div<Clickable>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

export default Overlay;
