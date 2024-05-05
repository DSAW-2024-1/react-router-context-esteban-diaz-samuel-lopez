import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/login")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div>
      {userData && (
        <div>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
        </div>
      )}
    </div>
  );
}
