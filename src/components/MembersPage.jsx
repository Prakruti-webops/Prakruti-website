import React from 'react'
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MembersCard from './MembersCard'
const membersList = require('../members.json')
// console.log(membersList)
function MembersPage() {
    return (
        <div style={memberPageStyle}>
            <h1 style={{textAlign:'center',color:'white',fontSize:'4rem',textShadow:'3px 3px 3px darkgreen'}}>MEMBERS</h1>
            <div style={memberStyle}>
                {membersList.map(members => (
                    <MembersCard key={members.Rollno} data={members}></MembersCard>
                ))}
            </div>
        </div>
    )
}
const memberPageBG = 'assets/photos/membersBG.png'
const memberPageStyle = {
    background:`green url(${memberPageBG}) no-repeat center`,
    backgroundSize:'cover',
    minHeight: '90vh',
    position:'relative',
    top:'6.75vw',
    padding:'30px'
}
const memberStyle = {
    display: 'grid',
    gridTemplateColums: 'auto auto auto',
}
export default MembersPage
