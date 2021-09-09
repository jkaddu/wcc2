import React, {useState} from 'react';
import Button  from './Button';
import Dropdown from './Dropdown';
import DropdownTwo from './DropdownTwo';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [dropdownTwo, setDropdownTwo] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innnerWidth < 850) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innnerWidth < 850) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    const onMouseEnterTwo = () => {
        if(window.innnerWidth < 850) {
            setDropdownTwo(false)
        } else {
            setDropdownTwo(true)
        }
    }

     const onMouseLeaveTwo = () => {
        if(window.innnerWidth < 850) {
            setDropdownTwo(false)
        } else {
            setDropdownTwo(false)
        }
    }

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true)
    }
    const extendElementTwo = () => {
        dropdownTwo ? setDropdownTwo(false) : setDropdownTwo(true)
    }

    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    WCC
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                    <li onMouseEnter={onMouseEnterTwo} onMouseLeave={onMouseLeaveTwo} onClick={extendElementTwo} className='nav-item'><Link to='/about' className='nav-links'>About <i className='fas fa-caret-down'/></Link>{dropdownTwo && <DropdownTwo onCloseMobileMenu={closeMobileMenu}/>}</li>
                    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={extendElement} className='nav-item'><Link to='/programs' className='nav-links'>Programs <i className='fas fa-caret-down'/></Link>{dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}</li>
                    <li className='nav-item'><Link to='/recognitions' className='nav-links' onClick={closeMobileMenu}>Recognitions</Link></li>
                    <li className='nav-item'><Link to='/partners' className='nav-links' onClick={closeMobileMenu}>Partners</Link></li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;