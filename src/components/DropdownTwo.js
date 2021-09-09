import React, {useState} from 'react';
import MenuitemsTwo from './MenuitensTwo';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function DropdownTwo(props) {
    const [click, setClick] = useState(false);

    return(
        <>
            <ul onClick={props.onCloseMenuMobile} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuitemsTwo.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={item.pth} className={item.cName} onClick={() => setClick(false)}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropdownTwo;
