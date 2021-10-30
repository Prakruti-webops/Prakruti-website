import { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
const NavBar = () => {
    // const [path, setPath] = useState('/')
    const clubLogo = 'logo.png'
    const membersLogo = 'assets/photos/membersLogo.png'
    var navItems;
    
        return (
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={clubLogo} id='prakrutiImg' alt='club logo' style={{ minWidth:'150px' }} /></NavbarBrand>
    
                    <Nav className="ms-auto" navbar>
    
                        <NavItem>
                            {window.location.pathname === '/members'?<><NavLink href="/" ><div className='fas fa-home'></div></NavLink>
                            <NavLink href="/members" ><div className='fas fa-users'></div><div className='line'></div></NavLink></>:<><NavLink href="/" ><div className='fas fa-home'></div><div className='line'></div></NavLink>
                            <NavLink href="/members" ><div className='fas fa-users'></div></NavLink></>}
                        
                        </NavItem>
    
    
                    </Nav>
    
                </Navbar>
                
        );
    
    
}
const footerDownStyle = {
    fontSize: '3rem',
    color: 'rgb(248,249,250)'
}
export default NavBar;