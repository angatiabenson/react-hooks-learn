import { APITester } from "./APITester";
import { TheAutoFocuser } from "./components/TheAutoFocuser";
import { TheCounter } from "./components/TheCounter";
import { TheMirror } from "./components/TheMirror";
import { ThePersistenceMaster } from "./components/ThePersistenceMaster";
import { TheToggle } from "./components/TheToggle";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div>
      <ThePersistenceMaster />
    </div>
  );
}

export default App;
