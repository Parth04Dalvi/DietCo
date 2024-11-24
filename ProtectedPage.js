import React, { useEffect, useState } from "react";

function ProtectedPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      const response = await fetch("/api/protected", {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage("Access denied. Please login.");
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="protected-page">
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default ProtectedPage;
