import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RxGithubLogo } from 'react-icons/rx';
import mainImage from '../assets/images/photo_01.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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
        <Introduce>
          <div style={{ width: '300px', height: '400px', overflow: 'hidden' }}>
            <Link to={'/detail'}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition}
                width={300}
                src={mainImage}
                alt="main"
              />
            </Link>
          </div>
        </Introduce>
      </Container>
    </>
  );
};

export default Main;
