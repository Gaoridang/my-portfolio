import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';

const NavBar = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 25px 10px;
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.ml};
  padding: 15px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }

  svg {
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;
    padding: 10px;
    color: white;
    background-color: #000000;
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.ml};

  a {
    padding: 15px;
  }

  span {
    font-size: 10px;
  }
`;

const Header = () => {
  return (
    <>
      <NavBar>
        <Contact>
          <Link to={``}>
            <AlternateEmailSharpIcon />
            Get in touch
          </Link>
        </Contact>
        <MenuBar>
          <Link to={`/`}>Home</Link>
          <span>/</span>
          <Link to={`about`}>About</Link>
          <span>/</span>
          <Link to={`contact`}>Contact</Link>
        </MenuBar>
      </NavBar>
    </>
  );
};

export default Header;
