import React, {useState} from 'react';
import MenuItems from './Menuitems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown(props) {
    const [click, setClick] = useState(false);

    return(
        <>
            <ul onClick={props.onCloseMobileMenu} className={click ? 'dropdown-menu clciked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                        <Link to={item.path} className={item.cName} onClick={() => setClick(false)}>{item.title}</Link>
                    </li>
                    )   
                })}
            </ul>
        </>
    )

}

export default Dropdown;