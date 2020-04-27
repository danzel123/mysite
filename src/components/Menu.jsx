import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useLocation} from "react-router";
import MainPage from "./MainPage/MainPage";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";


class Menu extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = '$(\'.mob-link\').on(\'click\', function(e) {\n' +
        '  console.log($(\'#menu-toggle\').prop(\'checked\'))\n' +
        '  if($(\'#menu-toggle\').prop(\'checked\') == true){\n' +
        '    console.log(\'checked\')\n' +
        '    $(\'#menu-toggle\').prop(\'checked\', false)\n' +
        '    console.log($(\'#menu-toggle\').prop(\'checked\'))\n' +
        '  }\n' +
        '});'
    document.getElementById('header').appendChild(script);
  }
  render() {
    return (
        <Router>
          <header id='header'>
            <nav className='main-nav'>
              <ul className='full-menu'>
                <li><Link exact="true" to="/siteProd/">Главная</Link></li>
                <li><Link to="/portfolio">Навыки</Link></li>
                <li><Link to="/blog">Блог</Link></li>
                <li><Link to="/about">Обо мне</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
              <div className='mobile-menu-box'>
                <input id="menu-toggle" type="checkbox"/>
                <label className="menu-btn" htmlFor="menu-toggle">
                  <span></span>
                </label>
                <ul className='mobile-menu'>
                  <li className='mob-link'><Link exact="true" to="/siteProd/">Главная</Link></li>
                  <li className='mob-link'><Link to="/portfolio">Навыки</Link></li>
                  <li className='mob-link'><Link to="/blog">Блог</Link></li>
                  <li className='mob-link'><Link to="/about">Обо мне</Link></li>
                  <li className='mob-link'><Link to="/contacts">Контакты</Link></li>
                </ul>
              </div>
            </nav>

          </header>
          <Switch>
            <Route exact path="/siteProd/">
              <MainPage/>
            </Route>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contacts">
              <Contacts/>
            </Route>
          </Switch>
        </Router>
    )
  }
}

export default Menu

