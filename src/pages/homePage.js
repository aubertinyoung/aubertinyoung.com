import React, { useState } from "react";
import profilePhotoOn from "../assets/images/macgregor-gs3.jpg";
import { HiArrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="mt-3 w-100 justify-content-center d-flex">
      <div style={{ height: "400px" }} className="main-section m-0 p-0">
        <div className="w-100 h-100 p-2 m-0 align-items-center d-flex flex-column">
          <img
            onMouseOut={() => setIsHovering(false)}
            src={profilePhotoOn}
            className="home-image"
            alt="Headshot of Macgregor Aubertin-Young"
            style={{
              maxHeight: "100%",
              borderRadius: "50%",
            }}
          />
          <div className="mt-4 align-items-start main-section">
            <p className="text-muted">
              <span className="text-dark">Hi, I'm Macgregor.</span> I'm an
              ecologist turned programmer and product manager from Victoria, BC,
              Canada. I steer software development for enterprise applications
              to support biodiversity data management and wildlife stewardship.
            </p>
            <div className="d-flex justify-content-end">
              <NavLink
                to="/about"
                className="nav-link"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                More about me <HiArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
