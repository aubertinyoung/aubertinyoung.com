import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsCheck2Square,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { BiCopy, BiCopyAlt } from "react-icons/bi";

export const NavigationBar = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const email = "macgregoray@gmail.com";

  return (
    // <div style={{ width: "100vw", height: "60px" }}>
    //   <div className="h-100 w-100 bg-info">
    <Navbar
      style={{ height: "50px" }}
      className="w-100 p-0 m-0 d-flex justify-content-center align-items-center bg-light"
    >
      <div className="navbar m-0 p-0 justify-content-center align-items-center">
        <Nav className="justify-content-between align-items-center w-100">
          <div className="w-25 d-flex align-items-center justify-content-around">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/work" className="nav-link">
              Work
            </NavLink>
            <NavLink className="nav-link"></NavLink>
          </div>
          <NavLink
            to="/"
            className="name flex-fill justify-content-center nav-link"
          >
            <h6
              className="m-0 p-0"
              style={{ fontFamily: "Lato", textAlign: "center" }}
            >
              <span style={{ fontFamily: "Lato Regular" }}>MACGREGOR</span>{" "}
              <span style={{ display: "inline-block", fontFamily: "Lato" }}>
                AUBERTIN-YOUNG
              </span>
            </h6>
          </NavLink>
          <div className="w-25 m-0 d-flex justify-content-end">
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/aubertinyoung"
                target="_blank"
                className="nav-link"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/macgregor-aubertin-young-b8136a122/"
                target="_blank"
                className="nav-link"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://twitter.com/AubertinYoung"
                target="_blank"
                className="nav-link"
              >
                <BsTwitter />
              </a>
              <div
                className="nav-link"
                onMouseOver={() => setShowEmail(true)}
                onMouseLeave={() => setTimeout(() => setShowEmail(false), 300)}
              >
                <GrMail
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 4000);
                  }}
                />
                {showEmail ? (
                  <div
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      padding: "2px",
                      position: "absolute",
                      minWidth: "200px",
                      right: "0",
                    }}
                    className="mt-2 bg-light justify-content-center"
                  >
                    <div
                      style={{
                        border: "none",
                        // borderRadius: "8px",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                      onClick={() => {
                        navigator.clipboard.writeText(email);
                      }}
                    >
                      <div
                        className="text-secondary d-flex align-items-center justify-content-center p-1 ps-2 pe-2"
                        style={{
                          backgroundColor: isCopied ? "#f2fff2" : "white",
                          borderRadius: "8px",
                        }}
                        onClick={() => {
                          setIsCopied(true);
                          setTimeout(() => setIsCopied(false), 4000);
                        }}
                      >
                        {isCopied ? (
                          <span className="text-success">Copied!</span>
                        ) : (
                          <span className="text-secondary">{email}</span>
                        )}
                        {isCopied ? (
                          <BsCheck2Square
                            className="ms-2"
                            style={{ color: "green" }}
                          />
                        ) : (
                          <BiCopyAlt className="ms-2" />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>

    // </div>
  );
};

export default NavigationBar;
