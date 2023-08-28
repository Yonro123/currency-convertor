import Button from "../../Button/Button";

import "./CourseButtonSwitch.css";

const CourseButton = ({ buttonValues, activeButton, onClick }) => {
  return (
    <div className="buttons">
      {buttonValues.map((buttonValue) => {
        return (
          <Button
            key={buttonValue}
            onClick={() => onClick(buttonValue)}
            value={buttonValue}
            activeButton={activeButton}
          />
        );
      })}
    </div>
  );
};

export default CourseButton;
