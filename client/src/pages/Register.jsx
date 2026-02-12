import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [msg, setMsg] = useState("");

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/user/register", form);
      setMsg(res.data.message);
      navigate("/verifyOtp", { state: { email: form.email } });
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="auth-box">
      <h2>Register – SneakHub</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name"
          onChange={handleChange} required />
        <input name="email" placeholder="Email"
          onChange={handleChange} required />
        <input name="password" type="password"
          placeholder="Password" onChange={handleChange} required />
        <button>Create Account</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default Register; 