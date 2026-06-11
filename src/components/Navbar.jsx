function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#22d3ee] cursor-pointer"
        >
          Portfolio
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-cyan-400 transition">
            Home
          </li>

          <li onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-cyan-400 transition">
            About
          </li>

          <li onClick={() => scrollToSection("skills")}
              className="cursor-pointer hover:text-cyan-400 transition">
            Skills
          </li>

          <li onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-cyan-400 transition">
            Projects
          </li>

          <li onClick={() => scrollToSection("certifications")}
              className="cursor-pointer hover:text-cyan-400 transition">
            Certifications
          </li>

          <li onClick={() => scrollToSection("education")}
              className="cursor-pointer hover:text-cyan-400 transition">
            Education
          </li>

          <li onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-cyan-400 transition">
            Contact
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;