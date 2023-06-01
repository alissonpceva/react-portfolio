import React, { useState } from "react";
import AboutMeSection from "../about";
import PortfolioSection from "../portfolio";
import ContactSection from "../contact";
import ResumeSection from "../resume";
import Footer from "../footer";

const Navigation = () => {
  const [currentSection, setCurrentSection] = useState("About Me");

  const handleNavigationClick = (title) => {
    setCurrentSection(title);
  };

  return (
    <div>
      <nav>
        <ul>
          <li
            onClick={() => handleNavigationClick("About Me")}
            className={currentSection === "About Me" ? "active" : ""}
          >
            About Me
          </li>
          <li
            onClick={() => handleNavigationClick("Portfolio")}
            className={currentSection === "Portfolio" ? "active" : ""}
          >
            Portfolio
          </li>
          <li
            onClick={() => handleNavigationClick("Contact")}
            className={currentSection === "Contact" ? "active" : ""}
          >
            Contact
          </li>
          <li
            onClick={() => handleNavigationClick("Resume")}
            className={currentSection === "Resume" ? "active" : ""}
          >
            Resume
          </li>
        </ul>
      </nav>
      <section>
      {currentSection === "About Me" && <AboutMeSection />}
        {currentSection === "Portfolio" && <PortfolioSection />}
        {currentSection === "Contact" && <ContactSection />}
        {currentSection === "Resume" && <ResumeSection />}
      </section>
      <Footer />
    </div>
  );
};

export default Navigation;
