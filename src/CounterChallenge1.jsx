import React from "react";
function CounterChallenge1() {
        const [Count1, setCount1] = React.useState(0);
        const [Count2, setCount2] = React.useState(0);
        var start = document.getElementById("StartBtn");
        var stop = document.getElementById("StopBtn");
        const Counter1 = () => {
            setCount1(Count1+1);
        }
        const Counter2 = () => {
            setCount2(Count2+2);
        }

        const Start = () => {
            setInterval(Counter1, 1000);
            setInterval(Counter2, 1000);
            start.disabled = true;
            stop.removeAttribute("disabled");
        }
        const Stop = () => {
            clearInterval(this)
            start.removeAttribute("disabled");
            stop.disabled = true;
        }

    return (
        <>
        <button value={-1} id="StartBtn" onClick={Start}>Start</button>
        <p>{Count1}</p>
        <p>{Count2}</p>
        <button value={+1} id="StopBtn" onClick={Stop}>Stop</button>
        </>
    )

}
export default CounterChallenge1