import React, {useState} from "react";


function App(props) {
    const [time , setTime] = useState("TIME");
    
    function showTime(){
        function updateTime(){
            let times = new Date().toLocaleTimeString("en-IN", { hour12: false });
            setTime(times);
        }
        setInterval(updateTime,1000)
    }
    
    
    return (
        <div className="container">
        <h1>{time}</h1>
        <button onClick={showTime}>Get Time</button>
        </div>
    );
}

export default App;
