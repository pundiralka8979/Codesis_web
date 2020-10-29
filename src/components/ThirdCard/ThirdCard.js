import React from "react";
import "./ThirdCard.css";
import { Card } from "react-bootstrap";

function ThirdCard() {
  const CardItems = [
    {
      number: "01",
      title: "Bring Together the right people in the team",
      text:
        "Explore and leverage the best resources for your project by hiring our virtual employee",
    },
    {
      number: "02",
      title: "Efficient sprint planning",
      text:
        "Explore and leverage the best resources for your project by hiring our virtual employee",
    },
    {
      number: "03",
      title: "Efficient sprint planning",
      text:
        "Explore and leverage the best resources for your project by hiring our virtual employee",
    },
    {
      number: "04",
      title: "Efficient sprint planning",
      text:
        "Explore and leverage the best resources for your project by hiring our virtual employee",
    },
    {
      number: "05",
      title: "Efficient sprint planning",
      text:
        "Explore and leverage the best resources for your project by hiring our virtual employee",
    },
    {
      number: "06",
      title: "Efficient sprint planning",
      text:
        "Explore and leverage the best resources for your project by hiring our virtual employee",
    },
  ];

  return (
    <div className="mydiv">
      <div className="grid2">
        {CardItems.map((item, index) => {
          return (
            <Card
              key={index}
              className="cardUI1"
             
            >
              <p>{item.number}</p>
              <Card.Body>
                <Card.Title className="myTitle">{item.title}</Card.Title>

                <Card.Text className="myText">{item.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default ThirdCard;
