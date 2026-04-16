import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
const YourFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/public/friends.json')
            const data = await res.json()
            setFriends(data);
            setLoading(false)
        };
        fetchData();
    }, [])


    const StatusColor = (status) => {
        if (status === "Overdue") {
            return "bg-[#EF4444] text-white";
        }
        else if(status === "Almost due") {
            return "bg-[#EFAD44] text-white";
        }
        return "bg-[#244D3F] text-white";
    };

    // console.log(friends);
    console.log(loading)
    return (
        <div className="bg-[#F8FAFC] py-10">
            <div className="w-10/12 mx-auto mb-4">
                <h2 className="text-2xl font-semibold">
                    Your Friends
                </h2>
            </div>

            {loading? 
            <div className='flex justify-center items-center'>
                <SyncLoader color='#244D3F' />
            </div>
            : <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {friends.map((friend) => (

                    <div
                        key={friend.id} 
                        className="card bg-[#FFFFFF] w-full shadow-sm rounded-xl"
                    >

                       
                        <figure className="pt-6 flex justify-center">
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="rounded-full w-24 h-24 object-cover"
                            />
                        </figure>

                        <div className="mx-auto p-4">

                            <h2 className="font-semibold text-xl text-center">
                                {friend.name}
                            </h2>

                           
                            <p className="text-center text-gray-500">
                                {friend.days_since_contact} Day
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {friend.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#CBFADB] text-[#244D3F] px-3 py-1 font-medium rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div

                                className={`px-3 py-1 rounded-full text-sm font-medium w-25 text-center mx-auto mt-3 ${StatusColor(
                                    friend.status
                                )}`}
                            >
                                {friend.status}

                            </div>

                        </div>

                    </div>

                ))}

            </div>}

        </div>

    );
};

export default YourFriends;