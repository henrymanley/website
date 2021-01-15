import './css/App.css';
import MainScreen from './components/MainScreen';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tab from "./components/Tab";
import FootInfo from "./components/FootInfo";
import Carousel from "./components/Carousel";
import Particles from "./components/Particles";
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
          <ThemeProvider theme={theme}>
              <div className="App">
                  <Particles classname="particle-canvas" />
                  <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                  }}>
                      <header>
                          <MainScreen />
                      </header>
                      <VertCaro />
                      <Tab />
                      <footer className="App-footer">
                          <FootInfo />
                      </footer>
                  </div>
              </div>
          </ThemeProvider>

  );
}

export default App;
