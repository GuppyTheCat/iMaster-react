import React, { Component } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet"
import ReactGA from 'react-ga';
import { YMInitializer } from 'react-yandex-metrika';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as JivoSite from "react-jivosite";
import * as serviceWorker from './serviceWorker';
import Main from "./pages/main"
import Services from "./pages/services"
import Articles from "./pages/articles"
import Article from "./pages/article"
import ArticlesNew from "./pages/articlesnew"
import ArticleNew from "./pages/articlenew"
import NotFound from "./pages/404"

class App extends Component {
    render() {
        ReactGA.initialize('UA-155045980-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <>
                <Helmet>
                    <meta charset="utf-8" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap&subset=cyrillic" rel="preload" as="style" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap&subset=cyrillic" rel="preload" as="style" />
                    <link href="/libs/fontawesome/css/all.min.css" rel="preload" as="style" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap&subset=cyrillic" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap&subset=cyrillic" rel="stylesheet" />
                    <link href="/libs/fontawesome/css/all.min.css" rel="stylesheet" />
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер</title>
                    <meta name="title" content="Ремонт электроники в Нижнем Новгороде - iМастер" />
                    <meta name="description"
                        content="Ремонт телефонов, планшетов, компьютеров, ноутбуков и прочей электроники в Нижнем Новгороде. Консультация со специалистом. Бесплатная диагностика. Бесплатный выезд домой или в офис. Гарантия на работу. Большой опыт работы с обширным спектром электронных устройств." />
                    <meta name="keywords"
                        content="ремонт, мастер, телефон, планшет, дисплей, матрица, стекло, замена, компьютер, пк, ноутбук, блок питания, телевизор, консоль, приставка, навигатор, видеокамера, фотоаппарат, навигатор, плеер, вейп, эбу, электроинструмент, экшн-камера, андроид, айфон, айпад, самсунг, android, iphone, ipad, sony, xbox, хбокс, икс бокс, playstation, ps, vita, плейстейшен" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="yandex-verification" content="d0bc21a7fd671329" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#00aba9" />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>
                <YMInitializer accounts={[57340663]} />
                <JivoSite.Widget id="xtHesNTWxB" />
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/services" exact component={Services} />
                        <Route path="/articles" exact component={Articles} />
                        <Route path="/articles/:articleId" exact component={Article} />
                        <Route path="/articlesnew" exact component={ArticlesNew} />
                        <Route path="/articlesnew/:articleId" exact component={ArticleNew} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </>
        );
    }
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
