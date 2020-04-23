import React, {Component} from 'react';
import MainPage from "./MainPage/MainPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Contacts from "./Contacts/Contacts";

import "./App.scss"

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="container">
                <Router>
                <nav className='main-nav'>
                    <ul>
                        <li><Link exact to="/">Главная</Link></li>
                        <li><Link to="/portfolio">Работы</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/about">Обо мне</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contacts">
                            <Contacts />
                        </Route>
                    </Switch>
            </Router>
            </div>
        )
    }

}

export default App

