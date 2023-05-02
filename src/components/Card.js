import React from 'react';

const Card = ({ id, name, username, email, phone}) => {
    return(
        <div className='tc dib bg-green ma3 pa3 br4 grow shadow-3'>
            <img className='ma2' src={`https://robohash.org/hello${id}`} alt='nothing to show here' />
            <div className='bg-light-green pa1 br3'>
                <h1>{name}</h1>
                <h1>{username}</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1>
            </div>
        </div>
    )
}

export default Card; 