import { useEffect, useState } from "react";

export function TheMirror(){
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        document.title = inputValue ? `Welcome, ${inputValue}!` : "The Mirror";
    }, [inputValue]);
    return (
        <div>
            <h1>The Mirror</h1>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>{inputValue.length > 0 ? `Welcome, ${inputValue}!` : "Please type your name..."}</p>
        </div>
    );
}