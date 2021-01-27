import './css/App.css';
import HomePage from './components/HomePage';
import { Switch, BrowserRouter as Router, Route, withRouter, Redirect } from "react-router-dom";
import DataProjects from "./components/DataProjects";
import Experience from './components/Experience';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import React from "react";


const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});


function App() {
  return (

          <Router>
              <Switch>
                  <ThemeProvider theme={Theme}>
                     <div>
                         <Route exact path="/" component={HomePage}></Route>
                         <Route exact path="/Experience" component={Experience}></Route>
                         <Route exact path="/Projects" component={DataProjects}></Route>
                    </div>
                  </ThemeProvider>
              </Switch>
          </Router>

  );
}

export default App;
