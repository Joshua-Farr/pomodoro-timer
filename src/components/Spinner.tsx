interface SpinnerProps {
  percent: number;
}

const Spinner: React.FC<SpinnerProps> = ({ percent }) => {
  const calcOffset = (requirement: number) => {
    return 1100 - 1100 * (requirement / 100);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="450"
      height="450"
      style={{ position: "absolute", top: "460" }}
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
          stroke: "#f7706f",
          strokeWidth: "20px",
          strokeDasharray: "1100",
          strokeDashoffset: `${calcOffset(percent)}`,
        }}
      />
    </svg>
  );
};

export default Spinner;
