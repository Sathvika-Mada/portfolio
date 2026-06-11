function Projects() {
  return (
    <section id="projects" className="bg-[#05071a] py-8 px-4">

      {/* OUTER GLOW BORDER */}
      <div className="w-[95%] mx-auto rounded-2xl p-[2px] about-border">

        <div className="bg-[#05071a] rounded-2xl p-10">

          {/* HEADING */}
          <h2 className="text-5xl font-bold text-cyan-300 mb-6 text-center">
            Projects
          </h2>

          <div className="w-24 h-[3px] mx-auto mb-10 bg-gradient-to-r from-cyan-400 to-pink-500"></div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* PROJECT 1 */}
            <div className="project-card">
                <div className="h-[150px] rounded-lg mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold">
                     Coming Soon
                </div>
              <h3>Employee Management System</h3>

              <p>
                Developing a full-stack Employee Management System to manage employee records, attendance, and payroll efficiently. Building a responsive user interface with React, creating RESTful APIs using Node.js and Express.js, and integrating MongoDB for data storage and management.
              </p>

              <div className="tech">
                MongoDB • Express • React • Node • JavaScript
              </div>

              <div className="buttons">
                <button className="disabled-btn">Live</button>

                <a
                  href="#"
                  className="project-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="project-card">
              <div className="h-[150px] rounded-lg mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    Coming soon
                    </div>

              <h3>Diabetes Prediction System</h3>

              <p>
                Built a machine learning application that predicts diabetes risk using patient health data. Implemented preprocessing, feature selection, and trained models to achieve accurate predictions.
              </p>

              <div className="tech">
                Python • Scikit-learn • Pandas • NumPy • ML
              </div>

              <div className="buttons">
                <a
                  href="https://diabeteiq.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Live
                </a>

                <a
                  href="https://github.com/Sathvika-Mada/Diabetes_prediction"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Projects;