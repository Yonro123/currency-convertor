import CurrencyForm from "../CurrencyForm/CurrencyForm";
import { useEffect } from "react";

export default function CurrencyFormIn({
  currencies,
  courses,
  inputValueIn,
  setInputValueIn,
  setInputValueOut,
  activeCourseIn,
  setActiveCourseIn,
  activeCourseOut,
  setActiveCourseOut,
}) {
  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      setInputValueOut(
        currencies[activeCourseIn][activeCourseOut] * inputValueIn
      );
    }
  }, [inputValueIn, activeCourseIn, activeCourseOut]);

  const onClick = (buttonValue) => {
    if (buttonValue === activeCourseOut) {
      setActiveCourseOut(activeCourseIn);
      setActiveCourseIn(buttonValue);
      return;
    }
    setActiveCourseIn(buttonValue);
  };
  const onChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length < 19) {
      if (e.target.value.length === 0) {
        setInputValueIn(1);
        return;
      }
      setInputValueIn(e.target.value);
    }
  };
  return (
    <CurrencyForm
      buttonValues={courses}
      inputValue={inputValueIn}
      activeButton={activeCourseIn}
      onClick={onClick}
      onChange={onChange}
    />
  );
}
