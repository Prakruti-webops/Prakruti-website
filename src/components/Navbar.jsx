import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FaChevronCircleDown,FaHome } from 'react-icons/fa'
const NavBar = ({currentPath,togglePath}) => {
    
    const clubLogo = 'logo.png'
    const membersLogo = 'assets/photos/membersLogo.png'
    
    return (
        <div >
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" ><img src={clubLogo} alt='club logo' style={{ width: '15vw', minWidth: '100px',maxWidth:'150px' }} /></NavbarBrand>

                <Nav className="ms-auto" navbar>
                    
                    <NavItem>
                        <NavLink href="/members" onClick={togglePath}><h3 className='me-3'>Members<img src={membersLogo} alt='club logo' width='100px' /></h3></NavLink>
                        {/* <NavLink href="/" onClick={togglePath}><h3 className='me-3'>Home<FaHome style={{width:'70px'}}/></h3></NavLink> */}
                        
                    </NavItem>

                </Nav>

            </Navbar>
            <a href="#contacts" className='contactsIcon'><FaChevronCircleDown className='chevron'style={footerDownStyle}></FaChevronCircleDown></a>
        </div>
    );
}
const footerDownStyle = {
    fontSize: '3rem',
    color: 'rgb(248,249,250)'
}
export default NavBar;