import './App.css';
import MainScreen from './components/MainScreen';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DataProjects from "./components/DataProjects";
import AboutMe from "./components/AboutMe";

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
         <header className="App-header"></header>
            <AboutMe></AboutMe>
            <DataProjects></DataProjects>
            <MainScreen></MainScreen>
            <Experience></Experience>
        </div>
          <footer>
              <Contact></Contact>
          </footer>
      </ThemeProvider>
  );
}

export default App;
