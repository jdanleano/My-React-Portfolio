import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  const styles = {
    top: {
      paddingTop: "40px",
      paddingBottom: "5px",
    },
    nav: {
      paddingTop: "10px",
      paddingBottom: "60px",
    },
  };

  return (
    <div>
      <div>
        <h1 style={styles.top} class="d-flex justify-content-center">
          Joseph Leano
        </h1>
      </div>

      <ul
        style={styles.nav}
        className="nav nav-pills d-flex justify-content-evenly"
      >
        <li className="nav-item pill-1 nav-link">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link" : "nav-link"}
          >
            About Me
          </a>
        </li>

        <li className="nav-item pill-2 nav-link">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={currentPage === "Projects" ? "nav-link" : "nav-link"}
          >
            Projects
          </a>
        </li>

        <li className="nav-item pill-3 nav-link">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link" : "nav-link"}
          >
            Contact
          </a>
        </li>

        <li className="nav-item pill-4 nav-link">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
