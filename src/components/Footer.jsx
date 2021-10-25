import React from 'react'
import { FaInstagram, FaLinkedinIn, FaChevronCircleUp } from 'react-icons/fa'
function Footer() {
    const clubInsta = ''
    const clubLinkedIn = ''
    return (
        <div>
            <a href="#"><FaChevronCircleUp style={footerUpStyle}className='chevron'></FaChevronCircleUp></a>

            <footer style={footerStyle} id='contacts'>
                <img src="assets/photos/deer.png" alt="Deer" style={imgStyle} />

                <div style={contactStyle}>
                    <div>
                        <h2>
                            REACH US
                        </h2>
                        <a href={clubInsta} ><FaInstagram className="socLinks" style={socialIconStyle}></FaInstagram></a>
                        <a href={clubLinkedIn}><FaLinkedinIn className="socLinks" style={socialIconStyle}></FaLinkedinIn></a>

                    </div>
                    <div>
                        <h2>CONTACT </h2>
                        <div style={nameStyle}><h3>CHITTASH</h3>
                            <p>Ph.no: <b>+91 9385527609</b></p></div>
                        <div style={nameStyle}><h3>RAM PRAKASH</h3>
                            <p>Ph.no: <b>+91 97883 38890</b></p></div>

                    </div>
                </div>
                <p >© PRAKRUTI 2021. All rights reserved.</p>

            </footer>
        </div>
    )
}
const footerUpStyle = {
    margin: '20px',
    fontSize: '3rem',
    color: 'white',
    position: 'relative',
    zIndex: '1'
}
const footerStyle = {
    position: 'relative',
    background: 'rgb(248,249,250)',
    padding: '30px 50px',
}
const imgStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '35vw',
    minWidth: '150px',
    maxWidth: '450px'

}
const contactStyle = {
    width: '40vw',
    minWidth: '420px',
    display: 'flex',
    justifyContent: 'space-around',
    marginRight: '60px'
}
const socialIconStyle = {
    fontSize: '40px',
    color: 'green',
    margin: '10px 20px 0 0',
    transition: 'all 0.2s ease',

}
const nameStyle = {
    margin: '10px 0px'

}
export default Footer
