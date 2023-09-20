import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Our Team {users.length}</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    users.map(team => <TeamMember
                    team={team}
                    key={team.id}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;