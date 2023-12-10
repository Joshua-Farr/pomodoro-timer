import Timer from "./components/Timer";
import { createContext, useState } from "react";

interface Settings {
  pomodoro: number;
  short: number;
  long: number;
}

export const TimerContext = createContext<{
  mode: number;
  setMode: React.Dispatch<React.SetStateAction<number>>;
  settings: { pomodoro: number; short: number; long: number };
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}>({
  mode: 1,
  setMode: () => {},
  settings: {
    pomodoro: 25,
    short: 5,
    long: 10,
  },
  setSettings: () => {},
});

function App() {
  const [mode, setMode] = useState(1);
  const [settings, setSettings] = useState<Settings>({
    pomodoro: 25,
    short: 5,
    long: 10,
  });

  return (
    <TimerContext.Provider value={{ mode, setMode, settings, setSettings }}>
      <Timer />
    </TimerContext.Provider>
  );
}

export default App;
