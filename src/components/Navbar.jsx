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
    
        return (
            <>
                <Navbar color="light" light expand="md"style={{zIndex:'1000'}}>
                    <NavbarBrand href="/"><img src={clubLogo} style={{width:'100px'}} alt='club logo'  /></NavbarBrand>
    
                    <Nav className="ms-auto" navbar>
    
                        <NavItem>
                            {window.location.pathname === '/members'?<><NavItem><NavLink href="/" ><div className='fas fa-home'></div></NavLink></NavItem>
                            <NavItem><NavLink href="/members" ><div className='fas fa-users'></div><div className='line'></div></NavLink></NavItem></>:<><NavItem><NavLink href="/" ><div className='fas fa-home'></div><div className='line'></div></NavLink></NavItem><NavItem><NavLink href="/members" ><div className='fas fa-users'></div></NavLink></NavItem>
                            </>}
                        
                        </NavItem>
    
    
                    </Nav>
    
                </Navbar>
                <a href="#contacts" id="contactsIcon" style={footerDownStyle}><FaChevronCircleDown className='chevron'></FaChevronCircleDown></a>
            </>
        );
    
    
}
const footerDownStyle = {
    fontSize: '3rem',
    color: 'rgb(248,249,250)'
}
export default NavBar;