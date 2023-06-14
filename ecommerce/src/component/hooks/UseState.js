import React, { useEffect, useState } from "react";

const UseState = () => {
    // Hooks
    // UseState => It is used to manage the state of value
    // UseEffect => Show Effect when the state changes
    // UseContext
    // UseRef
    // UseMemo
    const [count, setCount] = useState(0);
    const [c, setC] = useState(10);
    useEffect(() => {
        alert("value changed");
    }, [c]);
    // const[Variable, function]=useState(initialValue)
    // (0-9)=> Number
    // ("ram")=> String
    // {}=>Object
    // []=>Array

    const addItem = () => {
        setCount(count + 1);
    };
    const decItem = () => {
        setCount(count - 1);
    };
    return (
        <>
            <div>count:{count}</div>
            {count < 10 && <button onClick={addItem}>Increase Value</button>}
            {count > 0 && <button onClick={decItem}>Decrease Value</button>}
            <h1>{c}</h1>
            {c < 100 && <button onClick={() => setC(c + 10)}>increase</button>}
            {c > 0 && <button onClick={() => setC(c - 10)}>decrease</button>}
        </>
    );
};

export default UseState;
