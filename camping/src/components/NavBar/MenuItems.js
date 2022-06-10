import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

    {
        title: 'Sign In',
        url: '#',
        cName: 'nav-links'
    },

    {
        title: <FontAwesomeIcon icon={faShoppingCart} size="lg" />,
        url: '/cart',
        cName: 'nav-links'

    }
    // }  ,

    // {
    //     title: 'Sign up',
    //     url: '#',
    //     cName: 'nav-links-mobile'
    // }





















]