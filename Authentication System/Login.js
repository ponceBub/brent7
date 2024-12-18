import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUser({
      firstName: "John",
      lastName: "Doe",
      email: email,
      contactNumber: "123-456-7890",
      address: "123 Main St, City, Country",
      profilePicture: "https://via.placeholder.com/150",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
