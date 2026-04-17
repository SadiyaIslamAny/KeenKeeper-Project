import React, { useContext, useState } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";
import { TimeLineContext } from "../../Context/TimeLineContext";

const Timeline = () => {

  const { ctvs } = useContext(TimeLineContext);
  const [filterType, setFilterType] = useState("all");
  const filteredCtvs = filterType === "all" ? ctvs : ctvs.filter((item) => item.type === filterType);
  const getIcon = (type) => {

    if (type === "call") {
      return <Phone size={26} className="text-[#EFAD44]" />;
    }

    if (type === "text") {
      return <MessageSquare size={26} className="text-blue-600" />;
    }

    if (type === "video") {
      return <Video size={26} className="text-red-600" />;
    }
  };

  return (

    <div className="px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto my-6 sm:my-10 lg:my-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-[#244D3F] text-center md:text-left">
            Timeline
          </h2>
          <div className=" border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center md:justify-start w-full md:w-auto">


            <span className="
              text-sm
              sm:text-base
              font-medium
              text-[#244D3F]
              mr-2
            ">
            </span>

            <select
              className="
                outline-none
                bg-transparent
                text-sm
                sm:text-base
                cursor-pointer
              "
              value={filterType}
              onChange={(e) =>
                setFilterType(e.target.value)
              }
            >

              <option value="Filter">Filter</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>

            </select>

          </div>

        </div>
        <div className="space-y-4">

          {filteredCtvs.map((ctv) => (

            <div
              key={ctv.id}
              className="
                flex
                items-start
                sm:items-center
                gap-3 sm:gap-4
                bg-[#F8FAFC]
                p-3 sm:p-4
                rounded-lg
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <div className="
                p-2
                bg-white
                rounded-lg
                shadow-sm
                shrink-0
              ">
                {getIcon(ctv.type)}
              </div>
              <div className="flex-1">

                <h2 className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-semibold
                  text-[#244D3F]
                ">

                  {ctv.type === "call" && "Call"}
                  {ctv.type === "text" && "Text"}
                  {ctv.type === "video" && "Video"}

                  <span className="
                    text-[#64748B]
                    font-normal
                  ">
                    {" "}with {ctv.name}
                  </span>

                </h2>

                <p className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-[#64748B]
                ">
                  {ctv.date}
                </p>

              </div>

            </div>

          ))}
          {filteredCtvs.length === 0 && (

            <div className="
              text-center
              bg-gray-100
              py-10
              px-6
              max-w-xl
              mx-auto
              mt-10
              rounded-2xl
            ">

              <h1 className="
                text-red-600
                text-xl
                sm:text-2xl
                md:text-3xl
                font-bold
                mb-2
              ">
                No activities yet.
              </h1>

              <span className="
                text-gray-400
                text-sm
                sm:text-base
                md:text-lg
              ">
                New activities will appear here.
              </span>

            </div>

          )}

        </div>

      </div>

    </div>

  );
};

export default Timeline;