import React, { useContext } from "react";
import {Pie, PieChart,Tooltip,ResponsiveContainer,
    Cell,
} from "recharts";
import { TimeLineContext } from "../../Context/TimeLineContext";

const Stats = () => {
    const { ctvs } = useContext(TimeLineContext);

    const callCount = ctvs.filter(item => item.type === "call").length;
    const textCount = ctvs.filter(item => item.type === "text").length;
    const videoCount = ctvs.filter(item => item.type === "video").length;

    const data = [
        { name: "Call", value: callCount, color: "#0B3D2E" },
        { name: "Text", value: textCount, color: "#7C3AED" },
        { name: "Video", value: videoCount, color: "#22C55E" },
    ];

    return (
        <div className="w-11/12 md:w-10/12 mx-auto mt-6 md:mt-10">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Friendship Analytics
            </h1>
            <div className="bg-gray-100 rounded-2xl shadow-sm mt-6 md:mt-8 p-4 md:p-8">
                <p className="text-[#244D3F] font-medium text-sm md:text-lg mb-4">
                    By Interaction Type
                </p>

                <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px]">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius="65%"
                                outerRadius="85%"
                                paddingAngle={4}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs sm:text-sm md:text-base">
                    {data.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
