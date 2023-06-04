import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 200px;
  padding: 20px;
  height: 300px;
  border: 1.5px solid #000000;
  border-radius: 10px;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);
  font-size: ${(props) => props.theme.fontSize.rl};
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.font};

  h3 {
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  span {
    margin-bottom: 30px;
  }

  p {
    line-height: 1.2;
  }
`;

export interface Project {
  title: string;
  skill: string;
  id: string;
}

interface Props {
  projects: Project[];
}

const ProjectList = () => {
  return (
    <>
      <Card>
        <h3>Title</h3>
        <span>Skills</span>
      </Card>
      <Card>
        <h3>Title</h3>
        <span>Skills</span>
      </Card>
      <Card>
        <h3>Title</h3>
        <span>Skills</span>
      </Card>
      <Card>
        <h3>Title</h3>
        <span>Skills</span>
      </Card>
      <Card>
        <h3>Title</h3>
        <span>Skills</span>
      </Card>
    </>
  );
};

export default ProjectList;
