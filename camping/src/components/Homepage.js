import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from './NavBar/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faFontAwesome, faHiking, faMattressPillow, faShop } from '@fortawesome/free-solid-svg-icons';
import { faTent } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'
// import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';



export default function Homepage() {



    return (
        <div className="homepage-container"> Homepage

            <div className="links-flex-container">
                <div>
                    <Link to="/products/tents"> <Button type="button" className="tent-button"> <span className="tent-icon" > <FontAwesomeIcon icon={faTent} /></span>&nbsp;&nbsp;Tents </Button></Link>
                </div>
                <div>
                    <Link to="/products/backpacks">
                        <Button type="button">
                            <span className="hiking-icon" >
                                <FontAwesomeIcon icon={faHiking} />
                            </span>&nbsp;&nbsp;Backpacks
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to="/products/sleeping-bags"> <Button type="button"> <span className="sleeping-icon" > <FontAwesomeIcon icon={faMattressPillow} /></span>&nbsp;&nbsp;Sleeping-Bags</Button></Link>
                </div>
                <div>
                    <Link to="/products/accesories"> <Button type="button"> <span className="accessories-icon" > <FontAwesomeIcon icon={faShop} /></span>&nbsp;&nbsp;Accessories</Button></Link>
                </div>

            </div>


            {/* <ul className="homepage-links">
                <li ><Link className="tents " to="/tents"> Tents</Link></li>
                <li ><Link className="backpacks " to="/backpacks"> Backpacks</Link></li>
                <li ><Link className="sleepingbags " to="/sleepingbags"> Sleeping-Bags</Link></li>
                <li ><Link className="acccesories" to="/accessories"> Accessories</Link></li>
            </ul > */}

        </div>
    )
}
