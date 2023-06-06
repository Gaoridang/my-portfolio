import styled from 'styled-components';
import ProjectList from './ProjectList';

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section1 = styled.div`
  min-width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const Section2 = styled.section`
  min-width: 100%;
  height: 100%;
  background-color: white;
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  height: 400px;
  gap: 15px;
  margin: 20px 20px;
  overflow: hidden;
  width: 100%;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.ll};
`;

// types

const Projects = () => {
  const horizonScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const container = e.currentTarget;
    container.scrollLeft += e.deltaY;
  };

  return (
    <>
      <Container>
        <Section1>scroll horizontally</Section1>
        <Section2>scroll horizontally</Section2>
      </Container>
    </>
  );
};

export default Projects;
