import React, { Component } from "react";
import image from "../images/me.jpg";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="container p-10">
        <div className="row">
          <div className="col-md-5">
            <h2 className="aboutMeHeader">Om mig</h2>
            <p>
              Hej! Jag heter Simon Nöjd och är född år 1999. Jag bor på
              Kungsholmen med min mamma och i Fruängen med min pappa. I vår tar
              jag examen som en Javautvecklare på Nackademin. <br /> <br /> Mina
              intressen är:{" "}
            </p>
            <li>Bodybuilding</li>
            <li>Joggning</li>
            <li>Läsning</li>
            <li>Meditation</li>
            <li>Programmering</li>
            <li>Matlagning</li>
            <br />
            <p>
              Jag skulle beskriva mig själv som en positiv och ambitiös man som
              alltid strävar efter att utvecklas. Jag gillar att arbeta i team
              och skapa kontakter och relationer med andra människor.
            </p>
          </div>
          <div className="col-md-7">
            <img src={image} />
          </div>
        </div>
      </div>
    );
  }
}
