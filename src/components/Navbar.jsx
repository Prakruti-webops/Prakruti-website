import { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FaChevronCircleDown } from 'react-icons/fa'
const NavBar = () => {
    // const [path, setPath] = useState('/')
    const clubLogo = 'logo.png'
    const membersLogo = 'assets/photos/membersLogo.png'
    const changePath = () => {
        // setPath('/members')
        // document.title = 'Prakruti NITT-Members'
    }
    return (
        <div >
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" onClick={changePath}><img src={clubLogo} alt='club logo' style={{ width: '15vw', minWidth: '150px' }} /></NavbarBrand>

                <Nav className="ms-auto" navbar>
                    <NavItem>
                            <NavLink href="/members" onClick={changePath} ><h3 className='me-3'>Members<img src={membersLogo} alt='club logo' style={{ width: '70px' }} /></h3></NavLink>
                        </NavItem>

                </Nav>

            </Navbar>
            <a href="#contacts" className='contactsIcon'><FaChevronCircleDown style={footerDownStyle}></FaChevronCircleDown></a>
        </div>
    );
}
const footerDownStyle = {
    fontSize: '3rem',
    color: 'rgb(248,249,250)'
}
export default NavBar;