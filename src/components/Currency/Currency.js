import { useEffect, useState } from "react";

import fetchCurrencyData from "../../lib/fetchCurrencyData";
import CurrencyFormIn from "./CurrencyFormIn/CurrencyFormIn";
import CurrencyFormOut from "./CurrencyFormOut/CurrencyFormOut";

import "./Currency.css";

const Currency = () => {
  const [currencies, setCurrencies] = useState({});
  const [courses, setCourses] = useState([]);

  const [activeCourseIn, setActiveCourseIn] = useState(courses[0]);
  const [activeCourseOut, setActiveCourseOut] = useState(courses[1]);

  const [inputValueIn, setInputValueIn] = useState(0);
  const [inputValueOut, setInputValueOut] = useState(0);

  useEffect(() => {
    setActiveCourseIn(courses[0]);
    setActiveCourseOut(courses[1]);
  }, [courses]);

  useEffect(() => {
    const fetchData = async () => {
      const currencyData = await fetchCurrencyData();
      const newCourses = Object.keys(currencyData.rates);
      newCourses.push("EUR");
      const newCurrencies = { EUR: currencyData.rates };
      newCurrencies.EUR.EUR = 1;
      for (const course of newCourses) {
        if (course !== "EUR") {
          newCurrencies[course] = {};
        }
        for (const subCourse of newCourses.filter((c) => c !== course)) {
          if (course === "EUR") {
            newCurrencies[course][subCourse] =
              +newCurrencies[course][subCourse].toFixed(4);
            continue;
          }
          newCurrencies[course][subCourse] =
            currencyData.rates[subCourse] / currencyData.rates[course];
          newCurrencies[course][subCourse] =
            +newCurrencies[course][subCourse].toFixed(4);
        }
        newCurrencies[course][course] = 1;
      }
      setCurrencies(newCurrencies);
      setCourses(newCourses);
    };
    fetchData();
  }, []);

  return (
    <div className="currency">
      <CurrencyFormIn
        currencies={currencies}
        courses={courses}
        inputValueIn={inputValueIn}
        setInputValueIn={setInputValueIn}
        setInputValueOut={setInputValueOut}
        activeCourseIn={activeCourseIn}
        setActiveCourseIn={setActiveCourseIn}
        activeCourseOut={activeCourseOut}
        setActiveCourseOut={setActiveCourseOut}
      />
      <CurrencyFormOut
        courses={courses}
        inputValueOut={inputValueOut}
        activeCourseOut={activeCourseOut}
        setActiveCourseOut={setActiveCourseOut}
        activeCourseIn={activeCourseIn}
        setActiveCourseIn={setActiveCourseIn}
      />
    </div>
  );
};

export default Currency;
