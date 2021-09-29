import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = ( {handleToggle} ) => {
    return (
        <>
           <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon onClick={handleToggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar
