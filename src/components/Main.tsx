import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RxGithubLogo } from 'react-icons/rx';

// styling each components
const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  height: calc(100vh - 80px);
  overflow: hidden;
`;

const Social = styled.div`
  position: absolute;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  a {
    padding: 3px;
  }
`;

const Introduce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <>
      <Container>
        <Social>
          <a href="#">
            <AiOutlineInstagram size={30} />
          </a>
          <a href="#">
            <RxGithubLogo size={26} />
          </a>
        </Social>
        <Introduce>Text here</Introduce>
      </Container>
    </>
  );
};

export default Main;
