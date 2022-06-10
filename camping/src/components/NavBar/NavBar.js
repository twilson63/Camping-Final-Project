import React, { useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCampground, faMountainSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'
import { MenuItems } from './MenuItems';
import { Button } from './Button';


export default function NavBar() {

    const [clicked, setClicked] = useState(false)

    // state = { clicked: false }

    function handleClick() {

        if (clicked === false) {
            setClicked(true)
        }
        else {

            setClicked(false)
        }
    }

    return (

        <nav className=" NavBarItems">
            <h1 className="navbar-logo">Boon<span className="faCampground" > <FontAwesomeIcon icon={faCampground} /> <span> &nbsp; Dock's </span>
            </span></h1>

            <div className="menu-icon" onClick={handleClick}>

                {/* <span className={clicked ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />} ></span> */}
                <span className="burger"> {clicked ? <FontAwesomeIcon icon={faTimes} /> : (<FontAwesomeIcon icon={faBars} />)} </span>
            </div>
            {/* <FontAwesomeIcon icon={faCampground} /> */}
            {/* <FontAwesomeIcon icon={faShoppingCart} size="lg" /> */}

            <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>

                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}><Link className={item.cName} to={item.url}>{item.title}
                            {/* <div ClassName="home">Home</div> */}
                        </Link>
                        </li>
                    )
                })
                }

            </ul>

            {/* <Button>Sign Up</Button> */}


        </nav >
    )
}
