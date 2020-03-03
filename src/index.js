import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main"
import Services from "./pages/services"

import * as JivoSite from "react-jivosite";




class App extends Component {
    render() {
        return (
            <Router>
                <JivoSite.Widget id="xtHesNTWxB" />  
                <Route path="/" exact component={Main} />
                <Route path="/services" component={Services} />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
