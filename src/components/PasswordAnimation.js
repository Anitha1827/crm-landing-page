import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";

function PasswordAnimation() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-animation">
      <div className="dots">{showPassword ? "•••••" : "••••••••••"}</div>
      <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
        {showPassword ? <AiOutlineEye /> : <AiOutlineEye />}
      </Button>
    </div>
  );
}

export default PasswordAnimation;
