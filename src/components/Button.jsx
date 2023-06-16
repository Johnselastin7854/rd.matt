import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from "react-icons/ri";

import "../styles/_Button.scss";

function Button(props){
    return(
        <Link to={props.path}>
            <button className="btn">
            {props.title} <RiArrowRightLine className='icon'/>
          </button>
        </Link>
    )
};

export default Button;