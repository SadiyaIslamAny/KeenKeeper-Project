import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Phone, MessageSquare, Video, Bell, Archive, Trash2 } from "lucide-react";
import { SyncLoader } from 'react-spinners';
import { TimeLineContext } from '../../Context/TimeLineContext';

const FriendDetails = () => {

  const { id } = useParams();
  const [friends, setFriends] = useState([]);

  const { ctvs, setCtvs } = useContext(TimeLineContext);

  // Fetch Friends
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/friends.json');
      const data = await res.json();
      setFriends(data);
    };
    fetchData();
  }, []);

  // Find Expected Friend
  const expectedFriend = friends.find(
    (friend) => friend.id == id
  );

  // Loader
  if (!expectedFriend) {
    return (
      <div className="flex justify-center mt-30">
        <SyncLoader color="#244D3F" />
      </div>
    );
  }

  // ✅ Fixed Timeline Function
  const handleCtvs = (type) => {

    const newActivity = {
      name: expectedFriend.name,
      picture: expectedFriend.picture,
      type: type,
      date: new Date().toLocaleDateString()
    };

    setCtvs([...ctvs, newActivity]);
  };

  return (

    <div className="bg-gray-100 min-h-screen p-3 sm:p-4 md:p-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

        {/* LEFT SIDE */}

        <div className="bg-white rounded-2xl shadow p-4 sm:p-6 text-center">

          <img
            src={expectedFriend.picture}
            alt={expectedFriend.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3"
          />

          <h2 className="font-semibold text-base sm:text-lg">
            {expectedFriend.name}
          </h2>

          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
            {expectedFriend.status}
          </span>

          <div className="mt-2 flex flex-wrap justify-center gap-1">

            {expectedFriend.tags?.map((tag, i) => (

              <span
                key={i}
                className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>

            ))}

          </div>

          <p className="text-[#64748B] text-xs sm:text-sm mt-3 font-medium">
            {expectedFriend.bio}
          </p>

          <p className="text-sm text-gray-400 mt-1 break-all">
            {expectedFriend.email}
          </p>

          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">

            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 text-sm">
              <Bell size={16} /> Snooze
            </button>

            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 text-sm">
              <Archive size={16} /> Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-red-500 hover:bg-red-50 text-sm">
              <Trash2 size={16} /> Delete
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="md:col-span-2 space-y-4 md:space-y-6">

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

            <div className="bg-white rounded-xl shadow p-4 text-center">

              <h3 className="text-2xl sm:text-3xl font-bold text-[#244D3F]">
                {expectedFriend.days_since_contact}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500">
                Days Since Contact
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">

              <h3 className="text-2xl sm:text-3xl font-bold text-[#244D3F]">
                {expectedFriend.goal}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500">
                Goal (Days)
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">

              <h3 className="text-lg sm:text-2xl font-bold text-[#244D3F]">
                {expectedFriend.next_due_date}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500">
                Next Due
              </p>

            </div>

          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
             <div> 
              <h3 className="font-medium text-lg sm:text-xl text-[#244D3F]"> Relationship Goal </h3> 
              <p className="text-gray-500 text-sm sm:text-lg"> Connect every{" "} 
                <span className="font-bold text-black"> {expectedFriend.goal} Day </span> 
              </p> 
            </div> 
            <button className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-50">Edit</button> 
        </div>

          {/* Quick Check-In */}

          <div className="bg-white rounded-xl shadow p-4 sm:p-5">

            <h3 className="font-medium text-base sm:text-lg text-[#244D3F] mb-3 sm:mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

              {/* Call */}

              <button
                onClick={() => handleCtvs("call")}
                className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-xl py-5 flex flex-col items-center gap-2"
              >
                <Phone size={25} className="text-[#EFAD44]" />
                Call
              </button>

              {/* Text */}

              <button
                onClick={() => handleCtvs("text")}
                className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-xl py-5 flex flex-col items-center gap-2"
              >
                <MessageSquare size={25} className="text-blue-600" />
                Text
              </button>

              {/* Video */}

              <button
                onClick={() => handleCtvs("video")}
                className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-xl py-5 flex flex-col items-center gap-2"
              >
                <Video size={25} className="text-red-600" />
                Video
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default FriendDetails;
