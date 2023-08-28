import "./Button.css";

const Button = ({ value, activeButton, onClick }) => {
  return (
    <button
      className={`btn ${activeButton === value ? "active" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
