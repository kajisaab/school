import React from "react";
import "./Body.css";
import Slider from "./Slider/Slider";
import { SliderData } from "./Slider/SliderData";

function Body() {
  return (
      <>
    <div className="body">
      <div className="body-container">
        <div className="image-content">
          <img src="/images/tech.jpg" alt="" />
        </div>
        <div className="image-content-title">
          <div className="about-us">About Us</div>
          <br></br>
          <div className="description-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            fugiat magni ad laboriosam fugit et, aliquid temporibus voluptatibus
            rem ex eaque voluptas, itaque nesciunt maxime facilis minus, in iure
            possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa, natus animi excepturi nam est optio dolores quasi, ab quia
            fuga eos. Iste voluptatibus praesentium, ipsam officia perferendis
            aperiam aliquam Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maiores officiis consequatur, vero aut qui maxime est, ratione
            provident rem repudiandae autem, nobis iste rerum. Amet error
            voluptate deserunt earum odit! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nulla quasi vitae tempora commodi nam
            iste aut animi necessitatibus. Ea nesciunt corporis eveniet ipsum
            iusto, facilis voluptates voluptatem non quam! Earum.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ex cumque ad atque, molestias saepe necessitatibus porro cupiditate
            impedit magni repellendus ducimus. Blanditiis, ratione repellat.
            Laboriosam beatae at a dolore. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Rerum dolores sit eveniet cum
            dignissimos officiis molestias doloremque quo? Minus in sint
            molestias sequi? Tempore aspernatur, sequi cupiditate consectetur
            recusandae enim.
          </div>
        </div>
      </div>
    </div>
    
    <Slider slides = {SliderData} />


    </>
  );
}

export default Body;
