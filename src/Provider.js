import React, {useState} from "react";
import PackageContext from './Context';  // importing the context created

const Provider = (props) => {

    const [mission, setMission] = useState({   // setting default state as an object
        mname: "Infinity War",
        agentName: "Capt. America",
        accept: "Not Accepted"
    })

    return(
        <PackageContext.Provider value={{   // initialising the Provider with the value
            data: mission,                  // date = mission (initial state)
            isMissionAccepted: () => {      // created a method for updating the accept state
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}>
            {props.children}             {/* props.children refers to the state present above [mission] */}
        </PackageContext.Provider>
    )
}

export default Provider;   // Provider is a function which helps to pass/transfer data in another files/components