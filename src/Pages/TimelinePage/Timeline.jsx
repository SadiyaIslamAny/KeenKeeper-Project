import React, { useContext } from 'react';
import { Phone, MessageSquare, Video } from "lucide-react";
import { TimeLineContext } from '../../Context/TimeLineContext';

const Timeline = () => {

  const { ctvs } = useContext(TimeLineContext);

  console.log(ctvs);

  // 🔥 Icon show function
  const getIcon = (type) => {

    if (type === "call") {
      return <Phone size={30} className="text-[#EFAD44]" />;
    }

    if (type === "text") {
      return <MessageSquare size={30} className="text-blue-600" />;
    }

    if (type === "video") {
      return <Video size={30} className="text-red-600" />;
    }

  };

  return (
    <div>
    <div className=" p-6 rounded-xl space-y-4 w-10/12 mx-auto my-12">

      <h2 className="text-[48px] font-bold text-[#244D3F]">
       Timeline 
      </h2>

      {

        ctvs.map((ctv, ind) => (

          <div
            key={ind}
            className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-lg shadow"
          >

            {/* Icon */}
            <div className=" p-2">

              {getIcon(ctv.type)}

            </div>

            {/* Text */}
            <div>

              <h2 className="text-xl font-semibold text-[#244D3F]">

                {ctv.type === "call" && "Call"}
                {ctv.type === "text" && "Text"}
                {ctv.type === "video" && "Video"}

                <span className=" text-[#64748B] font-normal">
                  {" "}with {ctv.name}
                </span>

              </h2>

              <p className=" text-[#64748B]">
                {ctv.date}
              </p>

            </div>

          </div>

        ))

      }

    </div>
    </div>

  );
};

export default Timeline;