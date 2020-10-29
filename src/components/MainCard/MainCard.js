import React from 'react';
import './MainCard.css';
import {Card} from 'react-bootstrap';

function MainCard(){
  const MainCardItems = [
    {
      path: require("../../Icons/3rd Fold/Mobile Development.svg"),
      title: "Mobile App Development",
    },
    {
      path: require("../../Icons/3rd Fold/E-Commerce Development.svg"),
      title: "E-Commerce Development",
    },
    {
      path: require("../../Icons/3rd Fold/Hybrid Apps Development.svg"),
      title: "Hybrid Apps development",
    },
    {
      path: require("../../Icons/3rd Fold/Startup App Development.svg"),
      title: "Startup App Development",
    },
    {
      path: require("../../Icons/3rd Fold/Enterprise Apps Development.svg"),
      title: "Enterprise Apps Development",
    },
    {
      path: require("../../Icons/3rd Fold/App support & Maintainance.svg"),
      title: "App support & Maintaince",
    }
  ];
    return(
        <div >
           <div className= 'mainDiv' >
           
            <section className="mainSection">
              Heading for our services
              
              
            </section>
            <section className="mainSection2">
              We work with various mobile application platforms that include
            </section>
            <container className = "myconatiner1">
            {MainCardItems.map((card, index) => {
          return (
            
            
            <Card className ="mycard" style={{ background: "#003049 "}} key={index} >
              
              <img variant="top"
                src={card.path}
                style={{
                  background: "#003049 ",
                  width: "70px",
                  height: "70px",
                  marginTop: "30px",
                  marginLeft: "65px",
                }}>
                </img>
                <section style={{background: "#003049"}} className ="myText">
                {card.title}

                </section>
               
              
           
            </Card>
          );
        })}

            </container>
          

         

           
            
            
            


           </div>
           <div className="myLastHeader">
           <section className="lastHeader">
           Hear it from our clients

          </section>
          </div>
          

        </div>
    );
}
export default MainCard;