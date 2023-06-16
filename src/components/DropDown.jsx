import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/_Dropdown.scss";

function DropDown(props){

      return(
        <>
            <ul className='sub-menu'>
                {props.menu?.map((menu, index)=>(
                    <li className='sub-menu--lists' key={index}><Link className='sub-menu--links' to={menu.path}>{menu.title}</Link></li>
                ))}
            </ul>
    
        </>
      )
};

export default DropDown