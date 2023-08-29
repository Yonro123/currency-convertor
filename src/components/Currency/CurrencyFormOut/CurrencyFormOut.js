import CurrencyForm from "../CurrencyForm/CurrencyForm";

export default function CurrencyFormOut({
  courses,
  inputValueOut,
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

  return (
    <CurrencyForm
      buttonValues={courses}
      inputValue={inputValueOut}
      activeButton={activeCourseOut}
      onClick={onClick}
      onChange={() => {}}
    />
  );
}
