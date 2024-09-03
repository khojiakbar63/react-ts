import React, { useContext } from 'react'
import { Select } from '../select';
import { ThemeContext } from '../../../context/theme-context'
import type {ContextType} from '../../../types/index'
import { LangContext } from '../../../context/lang-context';
import type {LangType} from '../../../types/index'
import './style.scss'




export const Card:React.FC = () => {

  const {theme, toggleTheme}:ContextType = useContext(ThemeContext)
  const {lang}:LangType = useContext(LangContext)

  const cardStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff'
  }


  return (
    <div className='card' style={cardStyle} onClick={toggleTheme}>
        <img src="https://picsum.photos/300/200" alt="photo" />
        <div className="card-body">
            <h4>Card Title - {lang}</h4>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <button className='btn btn-primary'>Button</button>
            <Select />
        </div>
    </div>
  )
}
