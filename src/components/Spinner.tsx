interface SpinnerProps {
  percent: number;
}

const Spinner: React.FC<SpinnerProps> = ({ percent }) => {
  const calcOffset = (requirement: number) => {
    return 440 - 440 * (requirement / 100);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="400"
      height="400"
    >
      <circle
        cx="80"
        cy="80"
        r="70"
        strokeLinecap="round"
        style={{
          width: "250px",
          height: "250px",
          fill: "none",
          stroke: "#f7706f",
          strokeWidth: "20px",
          strokeDasharray: "440",
          strokeDashoffset: `${calcOffset(percent)}`,
        }}
      />
    </svg>
  );
};

export default Spinner;
