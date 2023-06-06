import { ThemeProvider } from 'styled-components';
import './App.css';
import { myTheme } from './modules/myTheme';
import GlobalStyle from './styles/GlobalStyle';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
