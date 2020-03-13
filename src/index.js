import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as JivoSite from "react-jivosite";
import * as serviceWorker from './serviceWorker';
import Main from "./pages/main"
import Services from "./pages/services"
import Articles from "./pages/articles"

class App extends Component {
    render() {
        return (
            <Router>
                <JivoSite.Widget id="xtHesNTWxB" />  
                <Route path="/" exact component={Main} />
                <Route path="/services" exact component={Services} />
                <Route path="/articles" exact component={Articles} />
                {/*<Route path="*" component={NotFound} />*/}
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
