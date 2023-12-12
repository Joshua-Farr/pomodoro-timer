interface SpinnerProps {
  percent: number;
}

import { useContext } from "react";
import { TimerContext } from "../App";

const Spinner: React.FC<SpinnerProps> = ({ percent }) => {
  const { settings } = useContext(TimerContext);
  const calcOffset = (requirement: number) => {
    return 1100 * (requirement / 100);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="450"
      height="450"
      style={{
        position: "absolute",
        transform: "rotate(-0.25turn) scaleY(-1) ",

        zIndex: "2",
      }}
    >
      <circle
        cx="50%"
        cy="50%"
        r="175"
        strokeLinecap="round"
        style={{
          width: "250px",
          height: "250px",
          fill: "none",
          stroke: `${settings.color}`,
          strokeWidth: "20px",
          strokeDasharray: "1100",
          strokeDashoffset: `${calcOffset(percent)}`,
        }}
      />
    </svg>
  );
};

export default Spinner;
