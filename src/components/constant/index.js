import basket from '../../assests/images/basket.svg'
import wishlist from '../../assests/images/wishlist.svg'
import login from '../../assests/images/person.svg'

export const mainNavLinks = [
    { label: 'Home', path: '/', font: 'Lufga-bold' },
    { label: 'Makeup', path: '#makeup' },
    { label: 'Accessories', path: '#accessories' },
    { label: 'Perfumes', path: '#perfumes' },
    { label: 'Hair-Care', path: '#hair-care' },
    { label: 'Cosmetics', path: '#cosmetics' },
    { label: 'Sunstiblity', path: '#sunstiblity' },
  ];
  
  export const extraNavLinks = [
    { label: 'Contact Us', path: '#contact' },
    { label: 'About Us', path: '#about' },
 
  ];

  export const NavIcons = [
    {
      label: 'Basket',
      type: 'icon',
      icon: basket,
      alt: 'basket',
      src: basket,
      onClick: true,
      showBadge: true,
      modalType: 'cart',
    },
    {
      label: 'Wishlist',
      type: 'icon',
      icon: wishlist,
      alt: 'wishlist',
      src: wishlist,
      onClick: true,
      showBadge: true,
      modalType: 'wishlist',
    },
    {
      label: 'Login',
      type: 'icon',
      icon: login,
      alt: 'login',
      src: login,
      onClick: true,
      showBadge: false,
      modalType: 'auth',
    },
  ];
  

  export const popularTags = [
    "Men",
    "Women",
    "Clothes",
    "Accessories",
    "Shoes",
    "Bags",
    "Jewelry",
  ];