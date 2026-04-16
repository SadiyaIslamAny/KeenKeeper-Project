import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SyncLoader } from 'react-spinners';

const YourFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/friends.json');
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const StatusColor = (status) => {
    if (status === "Overdue") return "bg-[#EF4444] text-white";
    if (status === "Almost due") return "bg-[#EFAD44] text-white";
    return "bg-[#244D3F] text-white";
  };

  return (
    <div className="bg-[#F8FAFC] py-6 sm:py-8 md:py-10">
      <div className="w-11/12 sm:w-10/12 mx-auto mb-4 md:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Your Friends
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <SyncLoader color="#244D3F" />
        </div>
      ) : (
        <div className="w-11/12 sm:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          
          {friends.map((friend) => (
            <Link key={friend.id} to={`/${friend.id}`}>
              <div className="bg-white w-full shadow-sm rounded-xl hover:shadow-md transition duration-300 p-4 sm:p-5">
                <div className="pt-4 flex justify-center">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h2 className="font-semibold text-lg sm:text-xl text-center">
                    {friend.name}
                  </h2>

                  <p className="text-center text-gray-500 text-sm sm:text-base">
                    {friend.days_since_contact} Day
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {friend.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#CBFADB] text-[#244D3F] px-2 sm:px-3 py-1 font-medium rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit text-center mx-auto mt-4 ${StatusColor(friend.status)}`}
                  >
                    {friend.status}
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>
      )}
    </div>
  );
};

export default YourFriends;
