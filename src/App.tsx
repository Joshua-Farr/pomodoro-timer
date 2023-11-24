import Timer from "./components/Timer";
import { createContext, useState } from "react";

export const TimerContext = createContext<{
  mode: number;
  setMode: React.Dispatch<React.SetStateAction<number>>;
}>({ mode: 1, setMode: () => {} });

function App() {
  const [mode, setMode] = useState(1);

  return (
    <TimerContext.Provider value={{ mode, setMode }}>
      <Timer />
    </TimerContext.Provider>
  );
}

export default App;
