import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

function handleChange(event) {
  const { name, value } = event.target

  if (event.target.type === "checkbox") {
    value = event.target.checked;
  }

  setFormData({
    ...formData,
    [name]: value,
  })
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(formData);
}


  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   })
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   })
  // }

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
