import React from 'react';
import {Container, Paper, TextField, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader} from "../../redux/reducers/headerSlice";

function Welcome(props) {
    
    const title = useSelector((state => state.header.value))
    const dispatch = useDispatch()
    
    const changeTitle = (event) => dispatch(changeHeader(event.target.value))
    
    return (
        <React.Fragment>
            <Typography variant="h4" sx={{textAlign: "center", m: 2}}>
                Electron and React Template
            </Typography>
            <TextField
                id="outlined-basic"
                label="Rename Appbar Title"
                variant="outlined"
                value={title}
                onChange={changeTitle}
                sx={{m: 2}}
            />
        </React.Fragment>
    );
}

export default Welcome;
