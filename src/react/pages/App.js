import React from 'react';
import Welcome from "./welcome/Welcome";
import AppHeader from "../components/AppHeader";

function App(props) {
    
    return (
        <div>
            <AppHeader/>
            <Welcome/>
        </div>
    );
}

export default App;
