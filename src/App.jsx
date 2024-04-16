import { useState } from "react";
import "./App.css";
import Carts from "./components/Carts/Carts";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelect = (course) => {
    let x = 0;
    let totalCreditHour = 0;
    carts.forEach((cart) => {
      totalCreditHour += cart.credit;
      if (cart === course) {
        x = 1;
      }
    });

    if (x === 0) {
      totalCreditHour += course.credit;
      if (totalCreditHour <= 20) {
        const newCarts = [...carts, course];
        setCarts(newCarts);
      } else {
        alert("Housefull");
      }
    } else {
      alert("already exist");
    }
  };

  return (
    <>
      <div className="m-8 ">
        <Header></Header>
        {/* main part */}
        <div className=" md:flex">
          <Courses courses={courses} handleSelect={handleSelect}></Courses>
          <Carts carts={carts}></Carts>
        </div>
      </div>
    </>
  );
}

export default App;
