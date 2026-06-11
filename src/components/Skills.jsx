import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="bg-[#05071a] py-8 px-4">

      {/* OUTER BORDER */}
      <div className="w-[95%] mx-auto rounded-2xl p-[2px] about-border">

        <div className="bg-[#05071a] rounded-2xl p-10 text-center">

          {/* HEADING */}
          <h2 className="text-5xl font-bold text-cyan-300 mb-4">
            MY SKILLS
          </h2>

          <div className="w-24 h-[3px] mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-pink-500"></div>

          <p className="text-pink-400 mb-12">
            Technologies I'm working with
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-5 gap-6">

            {/* CARD */}
            <div className="skill-box">
              <FaHtml5 className="text-orange-500 text-3xl" />
              <h4>HTML5</h4>
              <div className="bar"><div className="fill html"></div></div>
            </div>

            <div className="skill-box">
              <FaCss3Alt className="text-blue-500 text-3xl" />
              <h4>CSS3</h4>
              <div className="bar"><div className="fill css"></div></div>
            </div>

            <div className="skill-box">
              <SiJavascript className="text-yellow-400 text-3xl" />
              <h4>JavaScript</h4>
              <div className="bar"><div className="fill js"></div></div>
            </div>

            <div className="skill-box">
              <FaReact className="text-cyan-400 text-3xl" />
              <h4>React</h4>
              <div className="bar"><div className="fill react"></div></div>
            </div>

            <div className="skill-box">
              <FaNodeJs className="text-green-500 text-3xl" />
              <h4>Node.js</h4>
              <div className="bar"><div className="fill node"></div></div>
            </div>

            <div className="skill-box">
              <SiExpress className="text-gray-300 text-3xl" />
              <h4>Express</h4>
              <div className="bar"><div className="fill express"></div></div>
            </div>

            <div className="skill-box">
              <SiMongodb className="text-green-400 text-3xl" />
              <h4>MongoDB</h4>
              <div className="bar"><div className="fill mongo"></div></div>
            </div>

            <div className="skill-box">
              <FaGitAlt className="text-orange-500 text-3xl" />
              <h4>Git</h4>
              <div className="bar"><div className="fill git"></div></div>
            </div>

            <div className="skill-box">
              <FaDatabase className="text-gray-400 text-3xl" />
              <h4>C++</h4>
              <div className="bar"><div className="fill cpp"></div></div>
            </div>

            <div className="skill-box">
              <FaDatabase className="text-blue-400 text-3xl" />
              <h4>DBMS</h4>
              <div className="bar"><div className="fill db"></div></div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Skills;