import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="bg-[#05071a] py-16 px-4 md:px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Hello, It's Me </span>
            <span className="gradient-text">Sathvika</span>
          </h1>

          <div className="text-xl md:text-3xl font-semibold text-pink-400 mb-6 md:mb-8">
            And I'm a{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Problem Solver",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </div>

          <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8 max-w-xl">
            Computer Science Student | Web Developer | Problem Solver
            Building projects with React, Node.js, Python, and C++ while 
            exploring modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="glass-btn pink-btn"
            >
              Contact Me
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass-btn cyan-btn text-center"
            >
              View CV
            </a>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-3xl mt-10 text-cyan-400">

            <a
              href="https://github.com/Sathvika-Mada"
              target="_blank"
              rel="noreferrer"
              className="icon-hover"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sathvika-m-a64004301"
              target="_blank"
              rel="noreferrer"
              className="icon-hover"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE (ANIMATED PROFILE) */}
        <div className="flex justify-center mt-10 md:mt-0">

          <div className="relative group floating flex items-center justify-center">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 animate-pulse-slow z-0"></div>

            {/* ROTATING RING 1 */}
            <div className="absolute inset-0 rounded-full border-[3px] border-t-cyan-400 border-b-pink-500 border-l-transparent border-r-transparent animate-spin-slow z-10"></div>

            {/* ROTATING RING 2 */}
            <div className="absolute inset-2 rounded-full border-[2px] border-t-pink-500 border-b-cyan-400 border-l-transparent border-r-transparent animate-spin-reverse z-10"></div>

            {/* IMAGE */}
            <img
              src={profile}
              alt="profile"
              className="relative z-20 w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-[6px] border-cyan-400 shadow-[0_0_40px_#22d3ee] transition duration-500 group-hover:scale-105"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;