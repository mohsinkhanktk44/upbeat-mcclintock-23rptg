import React from "react";

const Car = ({ make, year }) => {
  return (
    <div>
      <p>
        Model: {make} Year: {year}
      </p>
    </div>
  );
};

export default Car;
