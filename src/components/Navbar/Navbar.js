import React from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';
import ButtonContact from '../ButtonContact';
import FirstFoldCard from '../FirstFoldCard/FirstFoldCard';
//import SecondCard from '../SecondCard/SecondCard';


function Navbar(){
    return (
      <div className="myContainer1">
        <div className="myContainer2">
          <nav className="Navbar-Items">
            <h1 className="navbar-logo">
              <img src={require("../../Icons/Logo.svg")}></img>
            </h1>

            <ul className="nav-menu">
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ButtonContact />
          </nav>
          <h1 id="comp1">Say hello to Codesis!</h1>
          <p id="comp2">The Ultimate Technology Partner for your business</p>
          <FirstFoldCard />

        </div>
        
      </div>
     
      
    );
        
    
}
export default Navbar;