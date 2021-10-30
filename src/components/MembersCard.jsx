import React from 'react'

function MembersCard({data}) {
    return (
        <div className="memCard col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div className="memberName"><strong>{data.Name}</strong></div>
                                <div className="memberContact"><i className="fas fa-phone" style={{marginRight: '5px'}}></i>{data.WhatsAppContact}</div>
                                {data.YourPicture === "" ? 
                                        <div className=""><img className="imgMember" src="assets/photos/user.png" alt='members.Name'/></div>
                                        :
                                        <div className=""><img className="imgMember" src={data.YourPicture} alt='members.Name'/></div>}
                                <div className="memberRoll">{data.Rollno}</div>
                                <div className="memberHandles">
                                {data.InstagramProfile === "" ? 
                                        null
                                        :
                                        <div><a href={data.InstagramProfile} rel='noreferrer'target='_blank'><i className="icon fab fa-instagram fa-2x"></i></a></div>}
                                {data.LinkedinProfile === "" ? 
                                        null
                                        :
                                        <div><a href={data.LinkedinProfile} rel='noreferrer'target='_blank'><i className="icon fab fa-linkedin fa-2x"></i></a></div>}
                                </div>
        </div>
    )
}

export default MembersCard
