import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [form, setForm] = useState({ bla: 1, hello: 2 });

  const saveFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Name: ${firstName} ${lastName}`);
    console.log({ form });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="firstname">First Name</label>
      <input
        name="firstname"
        value={firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(e.target.value);
          saveFields(e);
        }}
      />

      <label htmlFor="lastname">Last Name</label>
      <input
        name="lastname"
        value={lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLastName(e.target.value)
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

// Create a component with a form

// Has a onSubmit function

// Has a first name field
// Has a last name field

// has a Submit button
