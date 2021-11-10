import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form.js";

// import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name: "", email: "", role: "" });
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <h1> Alien PlayGround</h1>
      <Form values={values} change={onChange} submit={onSubmit} />

      {members.map((member) => {
        return <div>{`${member.email} ${member.name} ${member.role}` }</div>
      })}
    </div>
  );
}

export default App;
