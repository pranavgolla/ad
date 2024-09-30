import React from "react";
import { Link } from "react-router-dom";
import data from "./paragraphData";
import './e.css'

const Home = () => {
  return (
    <div className="c1">
      <div>
        <h1>Information</h1>
        {data.information.map((item, index) => (
          <p key={index}>
            <Link className="link" to={item.path}>{item.text}</Link>
          </p>
        ))}
      </div>
      <div>
        <h1>Customer Service</h1>
        {data.customerService.map((item, index) => (
          <p key={index}>
            <Link className="link" to={item.path}>{item.text}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
