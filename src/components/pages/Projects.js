import React from "react";
import Card from "react-bootstrap/Card";

export default function Projects() {
  return (
    <div class="m-3 d-flex flex-column align-items-center">
      <h1>Projects</h1>
      <div class="m-3 d-flex flex-row justify-content-center flex-wrap">
        <div class="card-1 m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-rigmatchme.PNG?raw=true"
            />
            <Card.Body>
              <Card.Title>Rig Match Me</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-1 m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-phartech.PNG?raw=true"
            />
            <Card.Body>
              <Card.Title>Joe's Pharmacy Tech Hub</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-1 m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/work-codemonsters.PNG?raw=true"
            />
            <Card.Body>
              <Card.Title>Code Monsters</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-1 m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/java-kombat.jpg?raw=true"
            />
            <Card.Body>
              <Card.Title>Java Kombat</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-1 m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/jdanleano/My-React-Portfolio/blob/main/src/assets/images/weatherfast-weather-app.jpg?raw=true"
            />
            <Card.Body>
              <Card.Title>WeatherFast Weather App</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
