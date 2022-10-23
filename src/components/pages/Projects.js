import React from "react";
import Card from "react-bootstrap/Card";

export default function Projects() {
  return (
    <div class="d-flex flex-column align-items-center">
      <h2>Projects</h2>
      <div class="projects mx-4 d-flex flex-row justify-content-center flex-wrap">
        <div class="card-1 m-2">
          <a href="https://www.rigmatchme.com" target="_blank" rel="noreferrer">
            <Card
              style={{
                width: "25rem",
                minHeight: "35rem",
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-rigmatchme.PNG?raw=true"
              />
              <Card.Body>
                <Card.Title>Rig Match Me</Card.Title>
                <Card.Text>
                  Rig Match Me is an application that provides a guided tour of
                  instruments to help steer the user towards getting properly
                  setup for the genre of music they are interested in playing.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="card-1 m-2">
          <a
            href="https://www.joephartech.com"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              style={{
                width: "25rem",
                minHeight: "35rem",
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-phartech.PNG?raw=true"
              />
              <Card.Body class="m-4">
                <Card.Title>Joe's Pharmacy Tech Hub</Card.Title>
                <Card.Text>
                  Joe's Pharmacy Tech Hub is a web application to help pharmacy
                  technicians and pharmacists with daily tasks in the specialty
                  pharmacy setting
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="card-1 m-2">
          <a
            href="https://jdanleano.github.io/Code-Monsters/"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              style={{
                width: "25rem",
                minHeight: "35rem",
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-codemonsters.PNG?raw=true"
              />
              <Card.Body>
                <Card.Title>Code Monsters</Card.Title>
                <Card.Text>
                  Code Monsters is a web application made for beginner
                  developers that gathers many resources about web development
                  in one location
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="card-1 m-2">
          <a
            href="https://jdanleano.github.io/Java-Kombat/"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              style={{
                width: "25rem",
                minHeight: "35rem",
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/java-kombat.jpg?raw=true"
              />
              <Card.Body>
                <Card.Title>Java Kombat</Card.Title>
                <Card.Text>
                  Java Kombat is a coding quiz that was made with Javascript
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="card-1 m-2">
          <a
            href="https://jdanleano.github.io/Weather-Fast/"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              style={{
                width: "25rem",
                minHeight: "35rem",
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/weatherfast-weather-app.jpg?raw=true"
              />
              <Card.Body>
                <Card.Title>WeatherFast Weather App</Card.Title>
                <Card.Text>
                  WeatherFast is a javascript application that uses an API to
                  accurately provide current weather conditions
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}
