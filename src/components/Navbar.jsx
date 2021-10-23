
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {FaChevronCircleDown} from 'react-icons/fa'
const NavBar = () => {
    const clubLogo = 'logo.png'
    const membersLogo = 'assets/photos/membersLogo.png'
    return (
        <div style={{position: 'relative'}}>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={clubLogo} alt='club logo' style={{ width: '15vw',minWidth:'150px' }} /></NavbarBrand>

                <Nav className="ms-auto" navbar>

                    <NavItem>
                        <NavLink href="/members" ><h3 className='me-3'>Members<img src={membersLogo} alt='club logo' style={{ width:'70px' }} /></h3></NavLink>
                    </NavItem>


                </Nav>

            </Navbar>
            <a href="#contacts" id="contactsIcon"><FaChevronCircleDown style={footerDownStyle}></FaChevronCircleDown></a>
        </div>
    );
}
const footerDownStyle = {
    margin: '20px',
    fontSize: '3rem',
    color: 'rgb(248,249,250)'
}
export default NavBar;