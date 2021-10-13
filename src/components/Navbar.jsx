
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
const NavBar = () => {

    const clubLogo = 'logo.png'
    const membersLogo = 'assets/photos/membersLogo.png'
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={clubLogo} alt='club logo' style={{ width: '15vw',minWidth:'150px' }} /></NavbarBrand>

                <Nav className="ms-auto" navbar>

                    <NavItem>
                        <NavLink href="/members" ><h3 className='me-3'>Members<img src={membersLogo} alt='club logo' style={{ width:'70px' }} /></h3></NavLink>
                    </NavItem>


                </Nav>

            </Navbar>
        </div>
    );
}

export default NavBar;