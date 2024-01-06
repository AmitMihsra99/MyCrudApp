import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../adduser/Add.css";
import axios from "axios";
import toast from "react-hot-toast";

function Edit() {
  const users = {
    name: "",
    email: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(users);

  const inputchangehandeler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log(user);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/user/gatonsuser/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const submitFrom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/user/update/${id}`,user);
      toast.success(response.data.msg, {
        position: "top-bottom",
        width: "12px",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="adduser">
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className="adduserForm" onSubmit={submitFrom}>
          <div className="inputGroup">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              value={user.name}
              onChange={inputchangehandeler}
              id="Name"
              name="name"
              autoComplete="off"
              placeholder="Full Name"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={inputchangehandeler}
              id="Email"
              name="Eamil"
              autoComplete="off"
              placeholder="amit@gmail.com"
            />
          </div>

          <div className="inputGroup">
            <button type="submit" onChange={inputchangehandeler}>
              UPDATE USER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
