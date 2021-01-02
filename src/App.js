import './css/App.css';
import MainScreen from './components/MainScreen';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DataProjects from "./components/DataProjects";
import AboutMe from "./components/AboutMe";
import Tab from "./components/Tab";
import FootInfo from "./components/FootInfo";

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
            <AboutMe></AboutMe>
            <Tab></Tab>
        </div>
          <footer>
              <FootInfo></FootInfo>
          </footer>
      </ThemeProvider>
  );
}

export default App;
