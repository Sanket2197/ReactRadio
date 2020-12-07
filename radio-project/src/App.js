import "./App.css";
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [formData, setFormData] = useState([]);

  const radioChange = (e) => {
    setFormData([...formData, { key: e.target.name, value: e.target.value }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/patient/answer", { answer: formData });
      setFormData([])
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <span>Question1</span>
          <input
            type="radio"
            value="1"
            name="q1"
            onChange={(e) => radioChange(e)}
          />{" "}
          1
          <input
            type="radio"
            value="2"
            name="q1"
            onChange={(e) => radioChange(e)}
          />{" "}
          2
          <input
            type="radio"
            value="3"
            name="q1"
            onChange={(e) => radioChange(e)}
          />{" "}
          3
        </div>
        <br />
        <div>
          <span>Question2</span>
          <input
            type="radio"
            value="1"
            name="q2"
            onChange={(e) => radioChange(e)}
          />{" "}
          1
          <input
            type="radio"
            value="2"
            name="q2"
            onChange={(e) => radioChange(e)}
          />{" "}
          2
          <input
            type="radio"
            value="3"
            name="q2"
            onChange={(e) => radioChange(e)}
          />{" "}
          3
        </div>
        <br />
        <button type="button" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
