import React from 'react';

const Card = ({name, email, username, id}) => {
    // const { name, email, username, id } = props;
    return ( 
        <div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
            </div>
        </div>
    );
};

export default Card;

// className='f1 tc'