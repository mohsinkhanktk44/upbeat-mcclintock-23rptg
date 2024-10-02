import React from "react";
import { useState } from "react";
import DataBindingExample from "./DataBindingExample";
import CarsList from "./CarsList";

const App = () => {
  const [Value, setvalue] = useState("");

  return (
    <div>
      <h1>Data Binding</h1>
      <DataBindingExample setvalue={setvalue} Value={Value} />
      <CarsList />
    </div>
  );
};

export default App;
