import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { ContainerProps } from '@src/typings/layout-components';



const Container = styled.div<PropsWithChildren<ContainerProps>>`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ maxWidth }) =>
    maxWidth ? `${maxWidth}px` : '1000px'};
`;

export default Container;