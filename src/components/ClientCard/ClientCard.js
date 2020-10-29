import React from "react";
import "./ClientCard.css";
//import Carousel from "react-elastic-carousel";
//import Item from "./Items/items";
//import { Card, Button } from "react-bootstrap";
import {Carousel} from "react-bootstrap"



function ClientCard() {
  return(
    <div>
    <div class="reviews">
      

      <div class="reviewCarousel">
        
        <div class="carouselReviewList" id="carouselReviewList">
         
          
          <div class="reviewCarouselItem" id="reviewCarouselItem1">
            <div class="review__right">
              <img
                src={require("../../Icons/download.jpg")}
                alt=""
                class="review__image"
              />
            </div>
            <div class="review__left">
              <p class="review__para">
                Interacting with and helping these kids learn has been a very
                enriching experience for me. Their zealous approach towards and
                bringing about a ...
              </p>
              <h3 class="review__name">Vipul Nigam, XLRI Jamshedpur</h3>
              <button class="review__button">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    </div>

   
  );
 
}
    
   
  
export default ClientCard;




