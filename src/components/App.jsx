import React, {Component} from 'react';
import MainPage from "./MainPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contacts from "./Contacts";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <Router>
                <nav>
                    <ul>
                        <li><Link to="/home">Главная</Link></li>
                        <li><Link to="/portfolio">Работы</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/about">Обо мне</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
                    <Switch>
                        <Route path="/home">
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
            </>
        )
    }

}

export default App

