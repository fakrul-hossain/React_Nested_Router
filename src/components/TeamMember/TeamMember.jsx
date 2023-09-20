import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({team}) => {
    // console.log(team)
    const {id,name,phone,username,email} = team
    return (
        <div className='mx-auto px-3'>
            <div className="card w-full  bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{phone}</p>
    <p>{email}</p>
    <div className="card-actions justify-end">
      <Link className='btn' to={`/team/${id}`}>Show Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TeamMember;