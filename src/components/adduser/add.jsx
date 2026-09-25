import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./add.css";

const Add = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://crud-app-server-xi.vercel.app/users/create",
        user
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addUser">
      <Link to="/">Back</Link>

      <h3>Add New Users</h3>

      <form className="adduserform" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>First Name</label>

          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={inputHandler}
            placeholder="First Name"
          />
        </div>

        <div className="inputGroup">
          <label>Last Name</label>

          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={inputHandler}
            placeholder="Last Name"
          />
        </div>

        <div className="inputGroup">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={user.password}
            onChange={inputHandler}
            placeholder="Password"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Add;