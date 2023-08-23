import React from "react";
import "./Testimonials.css";

import { FaDatabase } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container3">
        <div className="outline">
          <div className="content3">
            <i>
              <FaDatabase />
              Staxx
            </i>
            <p className="bodyp">
              "Это отличный вклад, который поможет не только вашему будущему, но
              и будущему всего мира!"
            </p>
            <div className="name">
              <p>Spider Man </p>
              <p>Man, Spider Man</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
