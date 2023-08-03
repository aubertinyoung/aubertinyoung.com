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
                state.page === "truths" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page === "truths"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "truths" })}
            >
              Facts
            </div>
            <div
              className={
                state.page === "beliefs" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page === "beliefs"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "beliefs" })}
            >
              Thoughts
            </div>
          </div>
          <div className="align-items-start main-section text-muted">
            {state.page === "truths" ? (
              <>
                <section>
                  <p>
                    I grew up in Vancouver, BC, Canada, where I studied ecology
                    and evolution before moving a boat-ride away to study
                    wildlife biology in Victoria. I researched wildlife
                    distributions and community dynamics in industrialized
                    landscapes.
                  </p>
                  <p>
                    I live in a tiny house, I go to sleep thinking about coffee,
                    and I would love to get a dog&mdash;if my house wasn't 250ft
                    <sup>2</sup>.
                  </p>
                  <p>
                    I feel most fulfilled when I'm learning, and I spend a lot
                    of time coding and learning new technology. I also spend
                    time rock climbing, mountain biking, and enjoying craft
                    beer.
                  </p>
                </section>
                <section></section>
              </>
            ) : (
              <section>
                <p>
                  I think a lot about environmental challenges and adapting to
                  global change. I believe that we will adapt, but not without
                  hardship. I hope that my contributions to the world will
                  benefit people and communities while conserving nature.
                </p>
                <p>
                  I also believe that earth observation satellites are one of
                  the coolest inventions ever, and I'm keen to use satellite
                  data to build a catalog of global species distribution models.
                  This would be my startup if I ever made one.
                </p>
                <p>
                  Relatedly, I think that biodiversity should be more prominent
                  in discussions about climate change. The world has come to
                  value reforestation as a climate change solution, but we need
                  biodiversity for newly planted trees to grow and persist. We
                  need whole ecosystems for a healthy planet.
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
