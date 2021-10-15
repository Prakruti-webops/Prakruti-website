
function RecentWorks() {
    

    return (
        
        <div id='recentWorks'style={ workStyle}>
            <h1 style={{ color: 'WHITE', fontSize: '3rem' }}>FOLLOW US ON INSTAGRAM</h1>
            <div style={{ margin: 'auto', width: '70vw' }} className="embedsocial-hashtag" data-ref="840db6dd36272bde865dbd30a2d082c7f7bd709c"></div>

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
     zIndex:'-1'
    }
export default RecentWorks
