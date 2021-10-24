
function MainWorks() {
    

    return (
        <div id='mainDiv'>
            <div id='main' style={mainStyle}>
                <h1 class="prakruti" style={{ color: 'WHITE', color: 'linear-gradient(red, yellow)' }}>PRAKRUTI</h1>
                <p>The Nature Club of NIT Tiruchippalli</p>
                <p>All creatures deserve a life free from fear and pain. It's true that the greatness of a nation can be judged by the way its animals are treated. So show some love towards the flora and fauna around you to make ours a lovely nation</p>
            </div>
            
        </div>

    );

}
const mainWorksBG = 'assets/photos/recentWorksBG.png'
const mainStyle = {
    background: `pink url(${mainWorksBG}) no-repeat center`,
    backgroundSize: 'cover',
    textAlign: 'center',
    zIndex: '1',
    width: '70%',
    maxWidth: '1100px',
    borderRadius: '10px',
    height: '65vh',
}
export default MainWorks
