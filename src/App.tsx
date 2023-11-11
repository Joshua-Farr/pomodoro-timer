import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const time = "25:00";
  return <Timer>{time}</Timer>;
}

export default App;
