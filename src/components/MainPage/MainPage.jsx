import React, {Component} from 'react';
import "./MainPage.scss"


class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main-page">
                <div className='main-information'>
                    <p>Привет! Меня зовут</p>
                    <h2>Денис Кривошапко</h2>
                    <p>Добро пожаловать на мой сайт!</p>
                </div>
            </div>
        )
    }

}

export default MainPage

