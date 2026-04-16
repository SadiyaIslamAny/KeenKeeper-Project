import React, { use } from 'react';

const friendsPromise = fetch('../../../public/friends.json').then(res=> res.json());

const YourFriends = () => {
    const friend = use(friendsPromise);
    console.log(friend)
    return (
    <div className="bg-[#F8FAFC]">
        <div className='w-10/12 mx-auto'>
            <h2>Your Friends</h2>
            
        </div>
        </div>
    );
};

export default YourFriends;