import { useState } from "react";
import { TimeLineContext } from "./TimeLineContext";

const TimeLineProvider = ({children}) => {
    const [ctvs, setCtvs] = useState([])
    
    const data ={
       ctvs,
       setCtvs
    }
    return <TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>
};

export default TimeLineProvider;