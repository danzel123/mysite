import React, {Component} from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>Портфолио</li>
                    <li>Блог</li>
                    <li>Обо мне</li>
                    <li>Контакты</li>
                </ul>
            </nav>
        )
    }

}

export default Menu

