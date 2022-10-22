import React from "react";

export default function Resume() {
  return (
    <div>
      <div class="m-3 d-flex flex-column align-items-center">
        <h1>Resume</h1>
        <p class="resume-text">
          View/Download my latest resume{" "}
          <a
            class="resume-link"
            href="https://docs.google.com/document/d/1vvzCrZEnNBKTTboMk4I-RZCYBOkjbVndGc7BosmFmF4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            HERE{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
