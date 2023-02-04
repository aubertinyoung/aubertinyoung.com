import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiTool } from "react-icons/fi";
import ButtonMailto from "../components/mailTo";

export const WorkPage = () => {
  const [state, setState] = useState({ page: "present" });
  const [showToolkit, setShowToolkit] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="mt-3 w-100 justify-content-center d-flex">
      <div style={{ minHeight: "400px" }} className="main-section m-0 p-0">
        <div className="w-100 h-100 p-2 m-0 align-items-center d-flex flex-column">
          <div
            style={{ minHeight: "30px" }}
            className="main-section d-flex justify-content-around"
          >
            <div
              className={
                state.page == "past" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page == "past"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "past" })}
            >
              Past
            </div>
            <div
              className={
                state.page == "present" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page == "present"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "present" })}
            >
              Present
            </div>
            <div
              className={
                state.page == "future" ? "nav-link w-25" : "nav-link w-25"
              }
              style={
                state.page == "future"
                  ? {
                      borderBottom: "2px solid grey",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : { color: "#A9A9A9", textAlign: "center", cursor: "pointer" }
              }
              onClick={() => setState({ page: "future" })}
            >
              Future
            </div>
          </div>
          <div className="align-items-start main-section text-muted">
            {state.page == "present" ? (
              <>
                <section>
                  <p>
                    I'm an Ecosystem Information Technologist for the Government
                    of British Columbia where I do a few things to modernize the
                    natural resource sector:
                  </p>
                  <ul style={{ fontWeight: "500" }}>
                    <li>Product ownership for two enterprise applications</li>
                    <li>Database modelling & administration</li>
                    <li>UI/UX design</li>
                    <li>Data quality assurance</li>
                    <li>R package & RShiny app development</li>
                    <li>Client & leadership engagement</li>
                  </ul>
                </section>
                <section>
                  <p>
                    I also do software development and data science on the side.
                    I'm currently building Terraplotta, a custom e-commerce
                    platform through which I will sell artistic species
                    distribution maps that I develop with Python and 3D
                    modelling software, and researching urban deer population
                    trajectories. Across projects, I regularly do:
                  </p>
                  <ul>
                    <li>Full-stack development</li>
                    <li>Satellite imagery processing & analysis</li>
                    <li>Species distribution modelling</li>
                    <li>Marketing & SEO optimization</li>
                  </ul>
                </section>
                <div
                  className="text-blue d-flex align-items-center"
                  onClick={() => setShowToolkit(!showToolkit)}
                  style={{ cursor: "pointer" }}
                >
                  <FiTool className="me-1" />
                  {showToolkit ? "Hide toolkit" : "Show toolkit"}
                </div>
                {showToolkit ? (
                  <section>
                    <p>
                      I use these tools most often, but I'll adopt whatever tool
                      is best for the job at hand.
                    </p>
                    <ul>
                      <li>React, Node.js, Figma</li>
                      <li>NumPy, Pandas, GDAL</li>
                      <li>PostgreSQL, Metabase</li>
                      <li>Tidyverse, RShiny</li>
                      <li>GitHub, Jira, Miro</li>
                      <br />
                    </ul>
                  </section>
                ) : (
                  <></>
                )}
              </>
            ) : state.page == "past" ? (
              <section>
                <p>
                  I received my Master's of Environmental Studies from the
                  University of Victoria in 2022. I researched how industrial
                  landscape changes affect the distribution and interactions of
                  large mammals (bears, wolves, deer, and other species),
                  gaining expertise in:
                </p>
                <ul>
                  <li>Generalized linear mixed-effects models</li>
                  <li>Bayesian models & inference</li>
                  <li>Machine learning</li>
                  <li>Remote sensing & GIS</li>
                  <li>Data visualization & cartography</li>
                  <li>Scientific study design</li>
                  <li>Technical writing & communication</li>
                </ul>
                <p>
                  Prior to my Master's, I spent the summers doing research and
                  the rest of year learning how to do better research. My first
                  biology job was monitoring and banding an endangered songbird
                  species in British Columbia's desert as a field technician. I
                  did that for a couple summers and then continued with
                  bird-related research throughout my biology degree.
                </p>
                <p>
                  My most recent biology job prior to my Master's was using
                  machine learning to identify plant species from their traits,
                  which helped catalyze my shift towards programming.
                </p>
              </section>
            ) : (
              <>
                <section>
                  <p>
                    I like bridging business and technology to support people
                    and nature.
                  </p>
                  <p>I'm interested in opportunities to blend</p>
                  <ul>
                    <li>Software development</li>
                    <li>Product design</li>
                    <li>Data science</li>
                  </ul>
                  <p>and advance</p>
                  <ul>
                    <li>Biodiversity conservation & restoration</li>
                    <li>Earth observation technologies</li>
                    <li>Renewable energy & industrial transformations</li>
                    <li>Sustainable economics & fintech</li>
                  </ul>
                  <p>and work with</p>
                  <ul>
                    <li>Mission-driven organizations</li>
                    <li>Engaged communities</li>
                    <li>Kind people</li>
                  </ul>
                </section>
                <section>
                  <div
                    className="d-flex justify-content-start align-items-start flex-column mt-2"
                    onMouseOut={() => setShowEmail(false)}
                  >
                    <div
                      style={{ textDecoration: "none" }}
                      className="text-blue m-0 p-0"
                      onMouseOver={() => setShowEmail(true)}
                    >
                      <ButtonMailto
                        address="mailto:no-reply@example.com"
                        label="Have an opportunity? Let's chat about it!"
                        style={{ textAlign: "center" }}
                        className="m-0 p-0"
                      />
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
