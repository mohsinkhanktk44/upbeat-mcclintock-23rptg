import React from "react";

const DataBindingExample = (props) => {
  const { setvalue, Value } = props;

  const getValue = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={getValue} />
      <p>
        Input Value: <span>{Value}</span>{" "}
      </p>
    </div>
  );
};

export default DataBindingExample;
