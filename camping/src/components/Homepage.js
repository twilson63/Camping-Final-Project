import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from './NavBar/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faFontAwesome, faHiking, faMattressPillow, faShop } from '@fortawesome/free-solid-svg-icons';
import { faTent } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'
import img from './images/camping-checklist-equipment-food-essentials-tent-sleeping-gear-checklist.jpeg'

export default function Homepage() {

    // pushed sat 11 june

    return (
        <div className="homepage-container"> Homepage update  13june

            <div>
                <p className="quote">
                    <h1>Wander Often, Wonder Always</h1>
                    <h1>!!!Lets Go Camping!!!&nbsp;&nbsp;<span><Link to="/products"> <Button type="button" className="shop-button"> Shop </Button></Link></span></h1>
                </p>
            </div>
            <div className="product-image-frame "><img src={img} />
            </div>


            <div className="links-flex-container">
                <div>
                    <Link to="/products/tents">
                        <Button type="button" className="tent-button">
                            <span className="tent-icon" >
                                <FontAwesomeIcon icon={faTent} />
                            </span>&nbsp;&nbsp;Tents </Button>
                    </Link>
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
                    <Link to="/products/sleeping-bags">
                        <Button type="button">
                            <span className="sleeping-icon" >
                                <FontAwesomeIcon icon={faMattressPillow} />
                            </span>&nbsp;&nbsp;Sleeping-Bags</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/products/accesories">
                        <Button type="button">
                            <span className="accessories-icon" >
                                <FontAwesomeIcon icon={faShop} />
                            </span>&nbsp;&nbsp;Accessories</Button>
                    </Link>
                </div>

            </div>



        </div>
    )
}
