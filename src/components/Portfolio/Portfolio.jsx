import React from 'react';
import './Portfolio.scss'
import * as htmlSerf from "../../sources/html-academy.jpg"

function MainPage() {
  return (
      <div className='wrapper'>
        <div className="learning">
          <h2>Обучение</h2>
          <p>Сейчас я углубляю свои знания в стеке web технологий. Изучаю паттерны программирования и стайлгайды</p>

        </div>
        <div className="skils-box">
          <h2>Мои навыки</h2>
          <ul>
            <li>
              <span className='tool'>Html5/Css3</span>
              <span style={{backgroundColor: 'rgb(227, 79, 38)', width: '80%'}} className='row html-css'/>
              <span className='value'>80%</span>
            </li>
            <li>
              <span className='tool'>JavaScript</span>
              <span style={{backgroundColor: 'rgb(151, 139, 13)', width: '80%'}} className='row js'/>
              <span className='value'>80%</span>
            </li>
            <li>
              <span className='tool'>React</span>
              <span style={{backgroundColor: 'rgb(0,153,229)', width: '60%'}} className='row react'/>
              <span className='value'>60%</span>
            </li>
            <li>
              <span className='tool'>Redux</span>
              <span style={{backgroundColor: 'rgb(118,73,187)', width: '60%'}} className='row redux'/>
              <span className='value'>60%</span>
            </li>
            <li>
              <span className='tool'>SQL</span>
              <span style={{backgroundColor: 'rgb(71,61,69)', width: '50%'}} className='row sql'/>
              <span className='value'>50%</span>
            </li>
            <li>
              <span className='tool'>GIT</span>
              <span style={{backgroundColor: 'rgb(162,38,0)', width: '10%'}} className='row git'/>
              <span className='value'>10%</span>
            </li>
          </ul>
        </div>
        <div className='cources-box'>
          <div className='course-box'>
            <h2>Professional HTML & CSS level 1</h2>
            <div className="img-box">
              <img src={htmlSerf} alt="Сертификат по верстке"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainPage

