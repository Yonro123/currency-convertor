import CurrencyForm from "../CurrencyForm/CurrencyForm";

export default function CurrencyFormOut({
  courses,
  inputValueOut,
  setInputValueOut,
  activeCourseOut,
  setActiveCourseOut,
  activeCourseIn,
  setActiveCourseIn,
}) {
  const onClick = (buttonValue) => {
    if (buttonValue === activeCourseIn) {
      setActiveCourseIn(activeCourseOut);
      setActiveCourseOut(buttonValue);
      return;
    }
    setActiveCourseOut(buttonValue);
  };
  const onChange = (e) => {
    setInputValueOut(e.target.value);
  };
  return (
    <CurrencyForm
      buttonValues={courses}
      inputValue={inputValueOut}
      activeButton={activeCourseOut}
      onClick={onClick}
      onChange={onChange}
    />
  );
}
