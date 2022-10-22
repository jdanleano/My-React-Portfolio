import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const styles = {
    all: {
      color: "#ffffff",
      minHeight: "100vh",
      backgroundImage: `url("https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-3.jpeg?raw=true")`,
      textShadow: `1px 1px 0 #000,
    1px 1px 0 #000,
    1px 2px 0 #000`,
    },
  };

  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.all}>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
