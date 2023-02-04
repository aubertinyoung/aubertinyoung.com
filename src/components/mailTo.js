import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ address, label }) => {
  return (
    <Link
      to="#"
      style={{ textDecoration: "none" }}
      className="text-blue"
      onClick={(e) => {
        window.location.href = address;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
