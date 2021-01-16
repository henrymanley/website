import './css/App.css';
import MainScreen from './components/MainScreen';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tab from "./components/Tab";
import FootInfo from "./components/FootInfo";
import VertCaro from "./components/VertCaro";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});

function App() {
  return (
      <div className="App">
          <ThemeProvider theme={theme}>
              <div className="App-header">
                  <header>
                      <MainScreen />
                  </header>
              </div>

                      <VertCaro />
                      <Tab />
                      <footer className="App-footer">
                          <FootInfo />
                      </footer>
          </ThemeProvider>
              </div>


  );
}

export default App;
