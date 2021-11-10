import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const onSubmit = () => {
    setMembers([values, ...members]);
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <h1> Alien PlayGround</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
    </div>
  );
}

export default App;
