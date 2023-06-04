import { ThemeProvider } from 'styled-components';
import './App.css';
import { myTheme } from './modules/myTheme';
import GlobalStyle from './assets/styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        {/* contents here */}
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
