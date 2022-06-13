import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '../../services/localStorage.service';




export const MenuItems = [


    {
        title: 'Home',
        url: '/',
        cName: 'nav-links'
    },

    {
        title: 'Products',
        url: '/products',
        cName: 'nav-links'
    },



    // {
    //     title: 'Orders',
    //     url: '/transactions',
    //     cName: 'nav-links'
    // },
    {
        title: <FontAwesomeIcon icon={faShoppingCart} size="lg" />,
        url: '/cart',
        cName: 'nav-links'

    }





















]