import React from "react";
function Counter() {
    
        const [Count, setCount] = React.useState(0)
        const CounterDown = () => {
            if (Count == 0)
                (alert("Valeur Invalide : Compteur Actuellement à zéro"))
            else setCount(Count-1);
        }
        const CounterUp = () => {
            setCount(Count+1);
        } 
        
    return (
        <>
        <button value={-1} onClick={CounterDown}>Minus 1</button>
        <p>{Count}</p>
        <button value={+1} onClick={CounterUp}>Plus 1</button>
        </>
    )

}
export default Counter