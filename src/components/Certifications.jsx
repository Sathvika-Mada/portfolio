function Certifications() {
  return (
    <section id="certifications" className="bg-[#05071a] py-8 px-4">

      {/* OUTER BORDER */}
      <div className="w-[95%] mx-auto rounded-2xl p-[2px] about-border">

        <div className="bg-[#05071a] rounded-2xl p-10">

          {/* 🔥 HEADING INSIDE BORDER */}
          <h2 className="text-5xl font-bold text-center text-cyan-300 mb-4">
            MY CERTIFICATIONS
          </h2>

          {/* UNDERLINE */}
          <div className="w-32 h-[3px] mx-auto mb-12 bg-gradient-to-r from-cyan-400 to-pink-500"></div>

          {/* 🔥 SLIDER */}
          <div className="cert-slider">

            {/* CERT 1 */}
            <div className="cert-box">
              <img src="/cert1.png" alt="certificate" className="cert-img" />
              <h3>Networking and Web Technologies</h3>
              <p>Infosys SpringBoard</p>
              <span>June 9</span>
            </div>

            {/* CERT 2 */}
            <div className="cert-box">
              <img src="/cert2.png" alt="certificate" className="cert-img" />
              <h3>Graph Theory Programming Camp</h3>
              <p>Algo University</p>
              <span>June 10</span>
            </div>

            {/* CERT 3 */}
            <div className="cert-box">
              <img src="/cert3.png" alt="certificate" className="cert-img" />
              <h3>Machine Learning Internship</h3>
              <p>ICAT</p>
              <span>September 2026</span>
            </div>

            <div className="cert-box">
              <img src="/cert4.png" alt="certificate" className="cert-img" />
              <h3>TCS iON Career Edge - Young Professional</h3>
              <p>TCS</p>
              <span>June 29</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Certifications;