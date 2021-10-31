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
        </div>
    )
}

export default MembersPage
