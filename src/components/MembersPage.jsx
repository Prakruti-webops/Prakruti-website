import React from 'react'
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const membersList = require('../members.json')
function MembersPage() {
    const renderImage = {
        
    }
    return (
        <div style={memberPageStyle}>
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: '4rem', textShadow: '3px 3px 3px darkgreen' }}>MEMBERS</h1>
            <div style={memberStyle}>
                <div id="allMembers">
                    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> */}
                        {membersList.map(members => (
                            <div className="memCard col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="memberName"><strong>{members.Name}</strong></div>
                                <div className="memberContact"><i className="fas fa-phone" style={{marginRight: '5px'}}></i>{members.WhatsAppContact}</div>
                                {members.YourPicture == "" ? 
                                        <div className=""><img className="imgMember" src="assets/photos/user.png" /></div>
                                        :
                                        <div className=""><img className="imgMember" src={members.YourPicture} /></div>}
                                <div className="memberRoll">{members.Rollno}</div>
                                <div className="memberHandles">
                                {members.InstagramProfile == "" ? 
                                        null
                                        :
                                        <div><a href={members.InstagramProfile} target='_blank'><i className="icon fab fa-instagram fa-2x"></i></a></div>}
                                {members.LinkedinProfile == "" ? 
                                        null
                                        :
                                        <div><a href={members.LinkedinProfile} target='_blank'><i className="icon fab fa-linkedin fa-2x"></i></a></div>}
                                </div>
                            </div>
                        ))}
                        {/* </div> */}

                    </div>
                </div>
                {/* // <MembersCard key={members.Rollno} data={members}></MembersCard> */}

            </div>
        </div>
    )
}
const memberPageBG = 'assets/photos/membersBG.png'
const memberPageStyle = {
    background: `green url(${memberPageBG}) no-repeat center`,
    backgroundSize: 'cover',
    minHeight: '90vh',
    position: 'relative',
    top: '6.75vw',
    padding: '30px'
}
const memberStyle = {
    // display: 'grid',
    gridTemplateColums: 'auto auto auto',
}
export default MembersPage
