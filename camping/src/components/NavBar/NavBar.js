import React, { useState, useEffect, useHistory } from 'react'
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCampground, faMountainSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import { useLocalStorage } from '../../services/localStorage.service';



export default function NavBar() {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const [user, setUser] = useState({})
    const ls = useLocalStorage();



    function handleClick() {

        if (clicked === false) {
            setClicked(true)
        }
        else {

            setClicked(false)
        }
    }

    function onLogoutClicked() {
        // unset the user in state
        setUser(undefined);
        // and in ls
        ls.removeUser();
        // then navigate to your destination
        navigate('/login')
        // /login
    }

    useEffect(() => {
        setUser(ls.getUser());
        console.log("test");
    }, [])


    return (

        <nav className=" NavBarItems">
            <Link to='/'><h1 className="navbar-logo"><span className="faCampground" > Boon &nbsp;<FontAwesomeIcon icon={faCampground} /> <span> &nbsp; Dock's </span>
            </span></h1></Link>

            {/* <Link to=‘/’>Home</Link> */}
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


            {user && (
                <p className="navbar-userOut"
                    onClick={onLogoutClicked} >
                    Log Out
                </p>
            )}

            {user
                ? (
                    <p className="faUserIsLoggedIn" >

                        <FontAwesomeIcon icon={faUser} color="#ffff" />
                    </p>
                )
                : (
                    <p className="navbar-userIn " >
                        <Link to='/login' className="linkLogin">
                            Log In
                        </Link>
                    </p>)
            }


            {/* 

<Link to='/login'>
                            <FontAwesomeIcon icon={faUser} color="#ffff" />
                        </Link> */}

            {/* 
                <p> <Link to='/login'><h1 className="navbar-userOut"><span className="faUserLogOut" ><FontAwesomeIcon icon={faUserXmark} color="#ffff" /> <span> </span>
                </span></h1></Link></p>} */}


            {/* <Button>Sign Up</Button> */}


        </nav >
    )
}

