import Input from "../../Input/Input";
import CourseButtonSwitch from "../CourseButtonSwitch/CourseButtonSwitch";

const CurrencyForm = ({
  buttonValues,
  inputValue,
  activeButton,
  onClick,
  onChange,
}) => {
  return (
    <div className="currencyRow">
      <CourseButtonSwitch
        buttonValues={buttonValues}
        activeButton={activeButton}
        onClick={onClick}
      />
      <Input value={inputValue} onChange={onChange} />
    </div>
  );
};

export default CurrencyForm;
