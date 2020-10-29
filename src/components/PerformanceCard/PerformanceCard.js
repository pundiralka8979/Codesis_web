import React from "react";
import "./PerformanceCard.css";

const performanceItem = [
  {
    number: "08",
    title: "Our Persence",
  },
  {
    number: "10+",
    title: "years of Experience",
  },
  {
    number: "100+",
    title: "Development Staff",
  },
  {
    number: "600+",
    title: "Projects Delivered",
  },
  {
    number: "92%",
    title: "Client satisfaction",
  },
  {
    number: "1.2M+",
    title: "Hours of Efforts",
  },
];

function PerformanceCard() {
  return (
    <div>
      <div className="myPerformance">
        <section className="myPerformanceHeading">
          A measure of our performance, success and achievements
        </section>
        <section className="myPerformancePara">
          Explore and leverage the best resources for your project by hiring our
          virtual employees across world and popular technologies
        </section>
        <div className="myOuterBox">
        {performanceItem.map((items, index) => {
          return (
            
              
                <div className="mybox" key={index}>
                  <h1 style={{ color: "#F9BB49", fontWeight: "2rem" }}>
                    {items.number}
                   
                  </h1>
                  <h3
                      style={{
                        color: "white",
                        font: "normal normal normal 20px/30px Montserrat",
                        width: "92px",
                        height: "54px",
                      }}
                    >
                     
                      {items.title}
                    </h3>
                </div>
             
            
          );
        })}
        </div>
      </div>
    </div>
  );
}
export default PerformanceCard;
