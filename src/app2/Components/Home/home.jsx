import React from "react";
import photo from "../../../images/1.jpg";
const Home = () => {
  return (
    <div className="container">
      <div className="row  d-flex justify-content-center align items-center mt-5">
        <div className="col-md-7 ">
          <img src={photo} className="img-fluid w-75" alt="" />
        </div>
        <div className="col-md-5 text-center mt-5">
          <h3 className="text-white">31th octobar 2018s</h3>
          <h1 style={{ color: "#f7ea66" }} className="fs-1 fw-bolder">
            Halloween Party
          </h1>
          <p className="text-center mt-3 text-white">
            Halloween or Hallowe'en (a contraction of All Hallows' Evening) also
            known as Allhalloween, All Hallows' Eve or All Saints' Eve is a
            celebration observed in a number of countries on 31 October.
          </p>
          <button className="btn rounded-pill py-2 px-3" style={{background:"#f7ea66"}}>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
