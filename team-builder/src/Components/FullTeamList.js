import React from 'react'

export default function FullTeamList(props) {
    return (
        <div>
            <h2>Full Team</h2>
            {props.teamList.map(teamMember => {
                return (
                    <p>{teamMember.name}, {teamMember.email}, {teamMember.role}</p>
                )
            }
            )}
        </div>
    )
}