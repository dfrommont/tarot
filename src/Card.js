// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap"
import React, { useState } from "react";

const Card = (props) =>  {
  const [frontShowing, setFrontShowing] = useState(true);

  return (
    <>
      {frontShowing && <div className="container-fluid p-2 m-2 py-3 text-center rounded-3" style={{backgroundColor: "var(--orange)", width: "20%", minHeight: "90%"}} id="front">
          <div className="container" onClick={() => {
            setFrontShowing(!frontShowing)
          }}>
              <img src={props.image} style={{
                      height: '90%',
                      width: '90%',
                      objectFit: 'cover',
                      cursor: 'pointer'
              }} alt={props.description}></img>
              <p className="display-4 fw-bold text-light" style={{marginTop: "-25%", overflow: "visible"}}>{props.name}</p>
          </div>
      </div>}
      {!frontShowing && <div className="container-fluid p-2 m-2 py-3 text-center rounded-3" style={{backgroundColor: "var(--orange)", width: "20%", minHeight: "90%"}} id="front" onClick={() => {
            setFrontShowing(!frontShowing)
          }}>
        <p className="text-danger">{props.description}</p>
        <p className="h3 text-danger">{props.meaning}</p>
      </div>}
    </>
  );
}

export default Card;
