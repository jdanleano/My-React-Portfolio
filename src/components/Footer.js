import React from "react";

export default function Footer() {
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
    },
  };
  return (
    <div>
      <footer style={styles.footer}>
        <a
          class="fa fa-facebook"
          href="https://www.facebook.com/jdanmedia"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          class="fa fa-envelope"
          href="mailto: jdanleano@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          class="fa fa-linkedin"
          href="https://www.linkedin.com/in/joseph-dan-leano-4109a7123"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          class="fa fa-github"
          href="https://github.com/jdanleano"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <a
          class="fa fa-microphone"
          href="https://www.jdanmedia.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </footer>
    </div>
  );
}
