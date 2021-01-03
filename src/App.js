import './css/App.css';
import MainScreen from './components/MainScreen';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AboutMe from "./components/AboutMe";
import Tab from "./components/Tab";
import FootInfo from "./components/FootInfo";
import ChicagoCrime from "./components/ChicagoCrime";
import Carousel from "./components/Carousel";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
         <header className="App-header">
             <MainScreen></MainScreen>
         </header>
            <Carousel></Carousel>
            <Tab></Tab>
        </div>
          <footer>
              <FootInfo></FootInfo>
          </footer>
      </ThemeProvider>
  );
}

export default App;
