import "./Input.css";

function Input({ onChange, value }) {
  return <input type="text" value={value} onChange={onChange} />;
}

export default Input;
