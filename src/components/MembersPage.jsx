import React from 'react'
import MembersCard from './MembersCard'
const membersList = require('../members.json')

function MembersPage() {
    return (
        <div id='membersPage'>
            <h1 >MEMBERS</h1>
            <div >
                <div id="allMembers">
                    <div className="row" >
                        
                        {membersList.map(members => (
                            <MembersCard key={members.Rollno} data={members}></MembersCard>
                                
                        ))}

                    </div>
                </div>
            </div>
            <h1>Faculty Advisor</h1>
            <div className="row">
                <div className="memCard col-xs-6 ">
                    <div className="memberName"><strong>Dr. Sai Krishna Mothku</strong></div>
                    <div className=""><img className="imgMember" src="assets/saikrishna.jpg" alt='Dr. Sai Krishna Mothku' /></div>
                    <div className="memberHandles">
                        <div><a href="https://www.nitt.edu/home/academics/departments/cse/faculty/saikrishna/" rel='noreferrer' target='_blank'><i className="icon fas fa-globe fa-2x"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersPage
