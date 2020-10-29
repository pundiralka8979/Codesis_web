import React from 'react';
import './SecondCard.css';
import {Container, Row, Col} from 'react-bootstrap';
function SecondCard(){
    return(
        <div >
            <Container fluid>
            <Row>
                <Col className = "myCol1" sm="6">
                <section className="mySection">
                    How Our Company
                    develops the products
                </section>
                <section className="mysection1">
                  Explore and leverage the best resources for your project
                  by hiring our virtual employees across niche and popular
                  technologies

                </section>
                </Col>
                <Col sm="6" className="myCol2">
               
                
                </Col>
            </Row>
            </Container>
        </div>
    );
}
export default SecondCard;