import React from "react";
import Car from "./Car";

const CarsList = () => {
  const cars = [
    { name: "Toyota Honda", year: 2015 },
    { name: "Toyota Camry", year: 2020 },
    { name: "Honda Civic", year: 2021 },
    { name: "BMW X5", year: 2019 },
    { name: "Ford Mustang", year: 2022 },
    { name: "Chevrolet Cruze", year: 2020 }
  ];

  return (
    <div>
      <h2>List of Cars</h2>
    </div>
  );
};

export default CarsList;
