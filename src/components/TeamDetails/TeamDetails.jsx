import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TeamDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    console.log(user.name)
    return (
        <div>
            <h2>Name: {name} </h2>
        </div>
    );
};

export default TeamDetails;