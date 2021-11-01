import React from "react";
import Navbar from "./components/Navbar.js";
// Be sure to uncomment these components and the data before you use them!
import SchoolCard from "./components/SchoolCard.js";
import data from "./nycSchoolEnrollmentData.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <SchoolCard
            school={data[0]}
            perFem={data[0]}
            perMa={data[0]}
            perBlack={data[0]}
          />
          <SchoolCard
            school={data[1]}
            perFem={data[1]}
            perMa={data[1]}
            perBlack={data[1]}
          />
          <SchoolCard
            school={data[2]}
            perFem={data[2]}
            perMa={data[2]}
            perBlack={data[2]}
          />
          <SchoolCard
            school={data[3]}
            perFem={data[3]}
            perMa={data[3]}
            perBlack={data[3]}
          />
          <SchoolCard
            school={data[4]}
            perFem={data[4]}
            perMa={data[4]}
            perBlack={data[4]}
          />
          <SchoolCard
            school={data[5]}
            perFem={data[5]}
            perMa={data[5]}
            perBlack={data[5]}
          />
          <SchoolCard
            school={data[6]}
            perFem={data[6]}
            perMa={data[6]}
            perBlack={data[6]}
          />
          <SchoolCard
            school={data[7]}
            perFem={data[7]}
            perMa={data[7]}
            perBlack={data[7]}
          />
          <SchoolCard
            school={data[8]}
            perFem={data[8]}
            perMa={data[8]}
            perBlack={data[8]}
          />
          <SchoolCard
            school={data[9]}
            perFem={data[9]}
            perMa={data[9]}
            perBlack={data[9]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
