import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <Link to="/">
        <div>
          <img
            src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/screen-shot-2017-11-16-at-3.50.20-pm-1.png"
            alt="error"
            className="error-msg"
          />
        </div>
        <div>
          <img
            src="https://www.shutterstock.com/image-photo/happy-puppy-welsh-corgi-14-600nw-2270841247.jpg" alt="dog" className="dog"/>
        </div>
      </Link>
    </div>
  );
}

export default NotFound;
