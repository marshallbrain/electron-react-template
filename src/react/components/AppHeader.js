import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, useTheme} from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import {ChangeThemeContext} from "../app/root";
import {useSelector} from "react-redux";

function AppHeader(props) {
    
    const paletteMode = useTheme().palette.mode
    const title = useSelector((state => state.header.value))
    
    const colorMode = React.useContext(ChangeThemeContext);
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={colorMode.toggleColorMode}
                >
                    {paletteMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default AppHeader;
