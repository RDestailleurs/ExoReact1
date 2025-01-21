import React from "react";
function Counter() {
    
        const [Count, setCount] = React.useState(0)
        var minus = document.getElementById("Minus");
        const CounterDown = () => {
            if (Count == 0)
                (
                    alert("Valeur Invalide : Compteur Actuellement à zéro"),
                    minus.setAttribute("disabled",true)
                );
                
            else setCount(Count-1);
        }
        const CounterUp = () => {
            setCount(Count+1);
            if (minus.getAttribute("disabled") == true)
                (minus.setAttribute("disabled",false)
            )
        }
        
    return (
        <>
        <button value={-1} id="Minus" onClick={CounterDown}>Minus 1</button>
        <p>{Count}</p>
        <button value={+1} id="Plus" onClick={CounterUp}>Plus 1</button>
        </>
    )

}
export default Counter