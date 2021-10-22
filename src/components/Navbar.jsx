
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
    var navItems;
    if (window.location.pathname == '/members') {
        return (
            <div style={{position: 'relative'}}>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={clubLogo} id='prakrutiImg' alt='club logo' style={{ minWidth:'150px' }} /></NavbarBrand>
    
                    <Nav className="ms-auto" navbar>
    
                        <NavItem>
    
                            <NavLink href="/" ><div sclassName='fas fa-home'></div></NavLink>
                            <NavLink href="/members" ><div className='fas fa-users'></div><div className='line'></div></NavLink>
                            {/* <NavLink href="/members" ><h3 className='me-3'><img src={membersLogo} alt='club logo' style={{ width:'70px' }} /></h3></NavLink> */}
                        </NavItem>
    
    
                    </Nav>
    
                </Navbar>
                
            </div>
        );
    } else {
        return (
            <div style={{position: 'relative'}}>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={clubLogo} id='prakrutiImg' alt='club logo' style={{ minWidth:'150px' }} /></NavbarBrand>
    
                    <Nav className="ms-auto" navbar>
    
                        <NavItem>
    
                            <NavLink href="/" ><div className='fas fa-home'></div><div className='line'></div></NavLink>
                            <NavLink href="/members" ><div className='fas fa-users'></div></NavLink>
                            {/* <NavLink href="/members" ><h3 className='me-3'><img src={membersLogo} alt='club logo' style={{ width:'70px' }} /></h3></NavLink> */}
                        </NavItem>
    
    
                    </Nav>
    
                </Navbar>
                
            </div>
        );
    }
    
}
const footerDownStyle = {
    margin: '20px',
    fontSize: '3rem',
    color: 'rgb(248,249,250)'
}
export default NavBar;