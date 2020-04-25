import React, {Component} from 'react';
import "./Contancts.scss"

class MainPage extends Component {
  render() {
    return (
        <div>
          <div className="top-long">
            <p className='contact-row'><a href="mailto:mrfisher123@mail.ru">e-mail: mrfisher123@mail.ru</a></p>
            <p className='contact-row'><a className='telegram-link' href="https://t.me/danzel123">telegram:
              @danzel123</a></p>
          </div>
          <div className="bot-blocks">
            <div className='bot-block'>
              <p className='contact-row'><a href="https://github.com/danzel123">gitHub</a></p>
            </div>
          </div>
        </div>
    )
  }

}

export default MainPage

