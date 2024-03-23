import { useState } from "react";
import { useUser } from "../hooks";

const Register = () => {
  const [form, setForm] = useState<User | null>(null);
  const { setUser } = useUser();

  const saveFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ form });
    setUser(form);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="firstname">First Name</label>
      <input
        name="firstName"
        value={form?.firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => saveFields(e)}
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        name="lastName"
        value={form?.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => saveFields(e)}
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        value={form?.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => saveFields(e)}
      />
      <br />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={form?.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => saveFields(e)}
      />
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
