import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useLocation} from "react-router";
import MainPage from "./MainPage/MainPage";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";


function Menu() {
    return (
        <Router>
        <nav className='main-nav'>
            <ul>
                <li><Link exact="true" to="/">Главная</Link></li>
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
    )
}

export default Menu

