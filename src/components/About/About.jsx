import React, {Component} from 'react';
import photo from '../../sources/photo.jpg'
import "./About.scss"

class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="about-contnent">
                <div className="imgDiv"><img src={photo} alt=""/></div>

                <p>

                    Привет всем!<br/>
                    Меня зовут Денис<br/>
                    <span>Кто я такой?</span><br/>
                    Я начинающий веб-разработчик из Иркутска<br/>
                    <span>Чем я занимаюсь?</span><br/>
                    Увлекаюсь front-end разработкой, изучаю новые для себя технологии.
                    Очень хотел бы поработать над настоящим боевым проектом в команде,
                    иметь возможнсоть общаться с более опытными разработчиками, чем я.
                    В свободное от веба время также могу поиграться с ардуино:) Также как и любой человек,
                    иногда смотрю продукты масмедиа. А из приземленных вещей увлекаюсь автомеханикой, люблю
                    управлять автомобилем, также непрочь приготовить что-нибудь вкусное.<br/>
                </p>
            </div>
        )
    }

}

export default MainPage

