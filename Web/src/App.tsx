import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
