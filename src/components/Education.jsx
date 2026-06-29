import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="bg-[#05071a] py-8 px-4">

      {/* OUTER BORDER */}
      <div className="w-[95%] mx-auto rounded-2xl p-[2px] about-border">

        <div className="bg-[#05071a] rounded-2xl p-10">

          {/* 🔥 HEADING INSIDE BORDER */}
          <h2 className="text-5xl font-bold text-center text-cyan-300 mb-4">
            My Academic Journey
          </h2>

          {/* UNDERLINE */}
          <div className="w-32 h-[3px] mx-auto mb-12 bg-gradient-to-r from-cyan-400 to-pink-500"></div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="edu-card">
              <div className="edu-top">
                <FaGraduationCap className="edu-icon" />
              </div>

              <h3>Bachelor of Technology in Computer Science</h3>

              <p className="edu-college">
                SASTRA University
              </p>

              <span>2023 – Present</span>
            </div>

            {/* CARD 2 */}
            <div className="edu-card">
              <div className="edu-top">
                <FaBook className="edu-icon" />
              </div>

              <h3>Higher Secondary Education</h3>

              <p className="edu-college">
                VidhyaBharathi Junior College
              </p>

              <span>2021 – 2023</span>
            </div>

            {/* CARD 3 */}
            <div className="edu-card">
              <div className="edu-top">
                <FaSchool className="edu-icon" />
              </div>

              <h3>Secondary School Education</h3>

              <p className="edu-college">
                Talent EM School
              </p>

              <span>2020 – 2021</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Education;