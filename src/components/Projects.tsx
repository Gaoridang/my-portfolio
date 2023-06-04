import styled from 'styled-components';
import ProjectList from './ProjectList';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  overflow: hidden;
`;

const Title = styled.h2`
  position: absolute;
  top: 150px;
  font-size: ${(props) => props.theme.fontSize.ll};
`;

// types

const Projects = () => {
  return (
    <>
      <Container>
        <Title>Projects</Title>
        {/* Scrolling Horizontally */}
        <CardContainer>
          <ProjectList />
        </CardContainer>
        scroll horizontally
      </Container>
    </>
  );
};

export default Projects;
