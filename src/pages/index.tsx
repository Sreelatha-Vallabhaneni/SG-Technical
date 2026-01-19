import Container from '@src/components/Container';
import styled from 'styled-components';

export default function Home() {
  return (
    <ContainerCss>
      <h1>Shape Games Web Assignment</h1>

      <IntroCss>
        <p>
          We are looking very much forward to see how you tackle this assignment
          and what ideas you have to solve it.
        </p>
        <p>Please find your assignment in the ReadMe file of this project.</p>
      </IntroCss>
    </ContainerCss>
  );
}

const ContainerCss = styled(Container)`
  padding: ${p => p.theme.sizes.spacing6} ${p => p.theme.sizes.spacing4};
`;

const IntroCss = styled.div`
  max-width: 600px;
`;
