import { FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const phone = "91XXXXXXXXXX"; // 🔥 replace with your number

    const text = `Hello, I'm ${email}. ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
       <section id="contact" className="bg-[#05071a] py-8 px-4">

      {/* 🔥 OUTER BORDER */}
      <div className="w-[95%] mx-auto rounded-2xl p-[2px] about-border">

        <div className="bg-[#05071a] rounded-2xl py-16 flex justify-center">

          {/* 🔥 INNER CARD */}
          <div className="contact-card">

            {/* HEADING */}
            <h2 className="text-4xl font-bold text-white text-center mb-2">
              Contact <span className="text-cyan-400">Me</span>
            </h2>


            {/* UNDERLINE */}
            <div className="w-16 h-[3px] mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-pink-500"></div>

            {/* FORM */}
            <div className="flex flex-col gap-6">

              {/* EMAIL */}
              <div className="relative">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <FaCommentDots className="input-icon" />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-field pl-10"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="whatsapp-btn" onClick={handleWhatsApp}>
                ✈ Send via WhatsApp
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Contact;