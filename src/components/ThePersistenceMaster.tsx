import { useLocalStorage } from "../hooks/useLocalStorage";

export function ThePersistenceMaster() {
    const [userName, setUserName] = useLocalStorage<string>("userName", "");
    return (
        <div>
            <h1>The Persistence Master</h1>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    );
}