import {FaChevronCircleDown} from 'react-icons/fa'
const birdsGIF = 'assets/gifs/birds2.gif'
function MainWorks() {
    

    return (
        <div id='mainDiv'>
        <a href="#contacts" id="contactsIcon"><FaChevronCircleDown ></FaChevronCircleDown></a>
        <div id='main' style={mainStyle}>
            <h1 class="prakruti" style={{ color: 'WHITE', color: 'linear-gradient(red, yellow)' }}>PRAKRUTI</h1>
            <p>The Nature Club of NIT Tiruchippalli</p>
            <p style={{padding: '50px'}}>All creatures deserve a life free from fear and pain. It's true that the greatness of a nation can be judged by the way its animals are treated. So show some love towards the flora and fauna around you to make ours a lovely nation</p>
        </div>
        <div id="birdsFooter">
        <div className="birds"></div>
            {/* <img id="birds" src={birdsGIF} alt="birds" /> */}
        </div>
        </div>

    );

}
const mainWorksBG = 'assets/photos/recentWorksBG.png'
const mainStyle = {
    width: '250px',
    background: `pink url(${mainWorksBG}) no-repeat center`,
    backgroundSize: 'cover',
    textAlign: 'center',
    // paddingTop: '30px',
    // position: 'relative',
    // top: '90px',
    zIndex: '1',
    width: '90%',
    maxWidth: '1100px',
    margin: 'auto',
    borderRadius: '10px',
    height: '70vh',
    // marginBottom: '15px'
}
export default MainWorks
