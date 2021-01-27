import React from "react";
import '../css/App.css';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import MainScreen from "./MainScreen";
import VertCaro from "./VertCaro";
import FootInfo from "./FootInfo";

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono',
            'sans-serif',
        ].join(','),
    },});

class HomePage extends React.Component {
    render() {
        return (
            <div className="App">
                <ThemeProvider theme={Theme}>
                    <div className="App-header">
                        <header>
                            <MainScreen/>
                        </header>
                    </div>
                    <VertCaro />
                    {/*<Tab />*/}
                    <footer className="App-footer">
                        <FootInfo/>
                    </footer>
                </ThemeProvider>
            </div>
        );
    }
}
export default HomePage;