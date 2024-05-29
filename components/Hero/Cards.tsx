import * as React from "react";
import "./Cards.scss";

const Cards: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" />
        <div className="card__head">Plotting Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg" />
        <div className="card__head">Angry Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" />
        <div className="card__head">Curious Cat</div>
      </div>
    </div>
  );
};

export default Cards;
