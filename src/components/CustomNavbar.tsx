import Link from 'next/link';
import React from 'react'
import { CustomActiveLink } from './CustomActiveLink';
import styles from  './CustomNavbar.module.css';


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'Auth',
      href: '/auth'
  },
  {
      text: 'Cocina',
      href: '/cocina'
  },
  {
      text: 'pedido',
      href: '/pedido'
  },
  {
    text: 'pricing',
    href: '/pricing'
},
];


export  const CustomNavbar = () =>  {
  


  return (

        <nav className={  styles['menu-container'] }>
            { menuItems.map( e => 
               <CustomActiveLink key={ e.href } text={ e.text } href={ e.href }  />
            )}


            {/* <CustomActiveLink text="Home" href="/"/>
            <CustomActiveLink text="Login" href="/auth"/>
            <CustomActiveLink text="Cocina" href="/cocina"/>
            <CustomActiveLink text="Pedido" href="/pedido"/> */}
        </nav>
    
  );
}
