import { useEffect, useRef, useState } from "react";

export function TheAutoFocuser() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    return (
        <div>
            <h1>The Auto Focuser</h1>
            <input name="search" type="text"
                autoFocus placeholder="I am focused on load!" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ref={searchRef} />
            <button onClick={() => {
                setSearchTerm("");
                searchRef.current?.focus();
            }}> Clear & Focus</button>
        </div>
    );
}