import React from "react";
import pic from "../../assets/images/id-picture.jpg";

export default function About() {
  return (
    <div class="mx-5 d-flex flex-column align-items-center">
      <img style={{ maxHeight: "20rem" }} src={pic} alt="" />
      <p class="mt-3 px-5">
        My name is Joseph, and I am currently a student in the Penn LPS Coding
        Boot Camp. I have worked as an Audio Engineer and a Pharmacy Technician,
        but have really been drawn to computer work and other tech related work.
        I decided to join this program to further my knowlege in tech, and
        hopfully find a career in the web development industry. In my spare
        time, I enjoy creating and listening to music, learning about coding,
        and watching videos about technology.
      </p>
    </div>
  );
}
