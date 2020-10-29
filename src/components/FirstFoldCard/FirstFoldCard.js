import React from "react";
import './FirstFoldCard.css';
import {Card} from "react-bootstrap";



function FirstFoldCard() {
  const FirstFoldIcons = [
    {
      path: require("../../Icons/First Fold Icons/Cloud Consulting.svg"),
      title: "Cloud Consulting",
    },
    {
      path: require("../../Icons/First Fold Icons/Blockchain Development.svg"),
      title: "Blockchain Development",
    },
    {
      path: require("../../Icons/First Fold Icons/Mobile Development.svg"),
      title: "Mobile Development",
    },
    {
      path: require("../../Icons/First Fold Icons/ECommerce Development.svg"),
      title: "ECommerce Development",
    },
    {
      path: require("../../Icons/First Fold Icons/Learning Platform.svg"),
      title: "Learning Platform",
    },
  ];

  return (
    <div className="box">
     <h1 className="myHeader">How can we help you?</h1>
    
      <div className="grid">
       
        {FirstFoldIcons.map((card, index) => {
          return (
            
            <Card className="CardsUI" key={index}>
              <Card.Img
                variant="top"
                src={card.path}
                style={{
                  width: "48px",
                  height: "48px",
                  marginTop: "46px",
                  marginLeft: "55px",
                }}
              />
              <Card.Body >
                <Card.Title
                  style={{
                    color: "#ffff",
                   
                    fontSize: "small"
                  }}
                >
                  {card.title}
                </Card.Title>
               
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default FirstFoldCard;