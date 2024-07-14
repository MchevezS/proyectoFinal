import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Img from "./Img";
const Carousel =() => {
  return (
    <Carousel className="text-center">
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/expreso22.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <div className="" style={{backgroundColor:"#FFDAB9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE DIAMANTES</h5>
          <p className="text-dark">₵250 000</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/expreso.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div  className="" style={{backgroundColor:"#FFDAB9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA KIDS</h5>
          <p className="text-dark">₵3 500</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/expreso1.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#FFDAB9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE ORO </h5>
          <p className="text-dark">₵22 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/expreso3.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#FFDAB9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA HOMBRE</h5>
          <p className="text-dark">₵10 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
};
export default Carousel;