import React from "react";
import pic from "../../assets/images/id-picture.jpg";
import favReact from "../../assets/images/react-logo.png";
import favHtml from "../../assets/images/html5-logo.png";
import favCss from "../../assets/images/css-logo.png";
import favBoot from "../../assets/images/bootstrap-logo.png";
import favJs from "../../assets/images/js-logo.png";
import favExpress from "../../assets/images/express-js.png";
import favNode from "../../assets/images/nodejs-logo.png";
import favHandle from "../../assets/images/handlebars-js-logo.png";
import favMySql from "../../assets/images/mysql-logo.png";
import favMongo from "../../assets/images/mongodb-logo.png";

export default function About() {
  const styles = {
    footer: {
      backgroundColor: "#535353",
      textAlign: "center",
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      height: "80px",
    },
    icons: {
      height: "50px",
      width: "50px",
      marginTop: "5px",
      marginLeft: "5px",
      marginRight: "5px",
    },
  };

  return (
    <div class="mx-5 d-flex flex-column align-items-center">
      <img style={{ maxHeight: "20rem", marginTop: "30px" }} src={pic} alt="" />
      <div class="about-text text-justify text-center">
        <p>
          My name is Joseph, and I am currently a student in the Penn LPS Coding
          Boot Camp. I have worked as an Audio Engineer and a Pharmacy
          Technician, but have really been drawn to computer work and other tech
          related work. I decided to join this program to further my knowlege in
          tech, and hopfully find a career in the web development industry. In
          my spare time, I enjoy creating and listening to music, learning about
          coding, and watching videos about technology.
        </p>
        <br></br>
        <h1 class="font-weight-bold">Skills</h1>
        <p>Frontend Development:</p>
        <img style={styles.icons} src={favReact} alt="React" />
        <img style={styles.icons} src={favHtml} alt="HTML" />
        <img style={styles.icons} src={favCss} alt="CSS" />
        <img style={styles.icons} src={favBoot} alt="Bootstrap" />
        <img style={styles.icons} src={favJs} alt="JavaScript" />
        <br></br>
        <br></br>
        <p>Backend Development:</p>
        <img style={styles.icons} src={favExpress} alt="JavaScript" />
        <img style={styles.icons} src={favNode} alt="JavaScript" />
        <img style={styles.icons} src={favHandle} alt="JavaScript" />
        <img style={styles.icons} src={favMySql} alt="JavaScript" />
        <img style={styles.icons} src={favMongo} alt="JavaScript" />
        <br></br>
        <br></br>
        <p> Other Skills:</p>
        <p>
          GitHub, Heroku, Microsoft Office, Adobe Photoshop, GIMP, Reaper DAW,
          Cubase DAW, Movavi Video Editor, OBS Studio
        </p>
      </div>
    </div>
  );
}
