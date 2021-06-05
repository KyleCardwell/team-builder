import React from 'react'

export default function FullTeamList(props) {

    function randomKey() {
        return Math.floor(Math.random() * Date.now())
    }

    return (
        <div>
            <h2>Full Team</h2>
            {props.teamList.map(teamMember => {
                return (
                    <p key={randomKey()}>{teamMember.name}, {teamMember.email}, {teamMember.role}</p>
                )
            }
            )}
        </div>
    )
}