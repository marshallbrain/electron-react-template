import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

function App(props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Electron React Template
                    </Typography>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <BrightnessHighIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
