import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const AboutPage = () => {
  const [state, setState] = useState({ page: "truths" });
  return (
    <div className="mt-3 w-100 justify-content-center d-flex">
      <div style={{ height: "400px" }} className="main-section m-0 p-0">
        <div className="w-100 h-100 p-2 m-0 align-items-center d-flex flex-column">
          <div
            style={{ minHeight: "30px" }}
            className="w-50 d-flex justify-content-around"
          >
            <div
              className={
                state.page == "truths" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page == "truths"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "truths" })}
            >
              Truths
            </div>
            <div
              className={
                state.page == "beliefs" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page == "beliefs"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "beliefs" })}
            >
              Beliefs
            </div>
          </div>
          <div className="align-items-start main-section text-muted">
            {state.page == "truths" ? (
              <>
                <section>
                  <p>
                    I grew up in Vancouver, BC, Canada, where I studied ecology
                    and evolution before moving a boat-ride away to study
                    wildlife biology in Victoria. I researched wildlife
                    distributions and community dynamics, especially of mammals
                    in industrialized landscapes in western Canada.
                  </p>
                  <p>
                    I live in a tiny house, I go to sleep thinking about coffee,
                    and I would love to get a dog&mdash;if my house wasn't 360ft
                    <sup>2</sup>.
                  </p>
                  <p>
                    I feel most fulfilled when I'm learning, and I spend a lot
                    of time coding and learning new tech. I also spend time rock
                    climbing and enjoying craft beer, ideally in the order.
                  </p>
                </section>
                <section></section>
              </>
            ) : (
              <section>
                <p>
                  I believe that we will adapt to global change, but not without
                  hardship. I hope that my contributions to the world will at
                  least improve the lives of others while protecting nature.
                </p>
                <p>
                  I believe that earth observation satellites are one of the
                  coolest inventions ever, and I'm optimistic that the next
                  revolutionary use of satellite imagery will be to develop
                  self-improving global species distribution models that anyone
                  can use. You will be able to point to an area on a map and see
                  which species live there, all while drinking coffee at home.
                </p>
                <p>
                  I believe that biodiversity should be more prominent when
                  discussing climate change. The world values reforestation as a
                  climate change solution, but we haven't yet considered the
                  necessity of biodiversity in enabling reforestation. We can
                  plant billions of trees but we need whole ecosystems to
                  support healthy forests.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
