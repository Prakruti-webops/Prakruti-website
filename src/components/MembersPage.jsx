import React from 'react'
import MembersCard from './MembersCard'
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const membersList = require('../members.json')

function MembersPage() {
    // const renderImage = {
        
    // }
    return (
        <div style={memberPageStyle}>
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: '4rem', textShadow: '3px 3px 3px darkgreen' }}>MEMBERS</h1>
            <div style={memberStyle}>
                <div id="allMembers">
                    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        
                        {membersList.map(members => (
                            <MembersCard key={members.Rollno} data={members}></MembersCard>
                                
                        ))}

                    </div>
                </div>

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
