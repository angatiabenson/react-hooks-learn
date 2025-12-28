import { useState } from "react";

export function TheCounter() {
    const [count, setCount] = useState<number>(0);

    function handleIncrement() {
        setCount(prevCount => prevCount + 1);
    }

    function handleDecrement() {
        if (count > 0)
            setCount(prevCount => prevCount - 1);
        else
            setCount(0);
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h1>The Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}