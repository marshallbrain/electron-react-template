import React from "react";
import "./root.css";
import App from "../pages/App";
import {Provider} from "react-redux";
import store from "../redux/store/store";
import {createTheme, CssBaseline, ThemeProvider} from "@material-ui/core";

export const ChangeThemeContext = React.createContext({
    toggleColorMode: () => {},
})

function Root(props) {
    
    const [themeOptions, setThemeOptions] = React.useState(
        {
            palette: {
                mode: 'light',
            }
        }
    )
    
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                return setThemeOptions((prevMode) => ({
                    ...prevMode,
                    palette: {
                        mode: prevMode.palette.mode === 'light' ? 'dark' : 'light'
                    }
                }));
            },
        }),
        [],
    );
    
    const theme = React.useMemo(
        () => {
            return createTheme(themeOptions)
        },
        [themeOptions],
    );
    
    return (
        <Provider store={store}>
            <ChangeThemeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App/>
                    </ThemeProvider>
            </ChangeThemeContext.Provider>
        </Provider>
    );
}

export default Root;
