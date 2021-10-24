
function RecentWorks() {
    

    return (
        
        <div id='recentWorks'style={workStyle}>
            <h1 style={{ color: 'WHITE', fontSize: '3rem' }}>FOLLOW US ON INSTAGRAM</h1>
            <div style={{ margin: 'auto', width: '70vw' }}class="embedsocial-hashtag" data-ref="1a95d8f7c52033cedc6e8a8718fa8e4391513b62"></div>

        </div>



    );

}
const recentWorksBG = 'assets/photos/recentWorksBG.png'
const workStyle = { 
    background: `pink url(${recentWorksBG}) no-repeat center`,
     backgroundSize: 'cover',
     textAlign: 'center', 
     paddingTop: '30px',
     position:'relative',
     top:'90px',
    }
export default RecentWorks
