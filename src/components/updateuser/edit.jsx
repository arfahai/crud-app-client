
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../adduser/add.css";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});

useEffect(() => {
  const getSingleUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/${id}`
      );

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  getSingleUser();
}, [id]);

 

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
      await axios.put(
        `http://localhost:8000/users/edit/${id}`,
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

      <h3>Update User</h3>

      <form className="adduserform" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>First Name</label>

          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={inputHandler}
          />
        </div>

        <div className="inputGroup">
          <label>Last Name</label>

          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={inputHandler}
          />
        </div>

        <div className="inputGroup">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
          />
        </div>

        <div className="inputGroup">
          <label>Password</label>

          <input
            type="text"
            name="password"
            value={user.password}
            onChange={inputHandler}
          />
        </div>

        <div className="inputGroup">
          <button type="submit">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;