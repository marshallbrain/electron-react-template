import React from "react";
import {Provider} from "react-redux";
import "./root.css";
import App from "../pages/App";

class Root extends React.Component {
    render() {
        const {store, history} = this.props;
        
        return (
            <React.Fragment>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.Fragment>
        );
    }
}

export default Root;
