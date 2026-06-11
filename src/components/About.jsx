
function About() {
  return (
    <section id="about" className="bg-[#05071a] py-8 px-4">

      {/* OUTER GLOW BORDER */}
      <div className="w-[95%] mx-auto rounded-2xl p-[2px] about-border">

        {/* INNER CONTENT */}
        <div className="bg-[#05071a] rounded-2xl p-10 text-center">

          {/* HEADING */}
          <h2 className="text-5xl font-bold mb-4 text-cyan-300">
            About Me
          </h2>

          {/* UNDERLINE */}
          <div className="w-24 h-[3px] mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-pink-500"></div>

          {/* PARAGRAPH */}
          <p className="max-w-4xl mx-auto text-gray-300 leading-8 mb-6">
            I'm a third-year B.Tech student in Computer Science and Engineering at SASTRA University. I have built a strong foundation in programming, web development, and problem-solving through academic learning and hands-on projects. My technical skills include C++, Python, React, Node.js, MongoDB, and MySQL. I enjoy building practical applications that solve real-world problems, from machine learning projects to full-stack web applications. I'm constantly exploring new technologies, improving my development skills, and expanding my knowledge through projects, coding practice, and certifications. My journey in technology is driven by curiosity, continuous learning, and the desire to grow as a software developer. I believe that every project is an opportunity to learn something new and become a better engineer.
          </p>

          
          {/* TWO COLUMN LAYOUT */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* PERSONAL INFO */}
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">
                Personal Info
              </h3>

              <div className="grid grid-cols-2 gap-6">

                <div className="card">
                  <span className="emoji">👩‍💻</span>
                  <h4>Name</h4>
                  <p>Mada Sathvika</p>
                </div>

                <div className="card">
                  <span className="emoji">🎂</span>
                  <h4>Age</h4>
                  <p>20</p>
                </div>

                <div className="card">
                  <span className="emoji">📧</span>
                  <h4>Email</h4>
                  <p>sathvika8282@gmail.com</p>
                </div>

                <div className="card">
                  <span className="emoji">🎓</span>
                  <h4>Status</h4>
                  <p>Undergraduate</p>
                </div>

              </div>
            </div>

            {/* PROFESSIONAL INFO */}
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">
                Professional Info
              </h3>

              <div className="grid grid-cols-2 gap-6">

                <div className="card">
                  <h4>Tech Skills</h4>
                  <p>C++, Python, React, Node.js, MongoDB, MySQL</p>
                </div>

                <div className="card">
                  <h4>Current Learning</h4>
                  <p>AWS,Power BI,Web Development</p>
                </div>

                <div className="card">
                  <h4>Experience</h4>
                  <p>Built ML & Full Stack Projects</p>
                </div>

                <div className="card">
                  <h4>Interests</h4>
                  <p>Web Dev, AI/ML</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;