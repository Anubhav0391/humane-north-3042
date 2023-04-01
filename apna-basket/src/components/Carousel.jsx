import React from "react";
import Slider from "react-slick";

export function FruitsVegesSlider(){
    const fruits=['Nagpur Oranges','Fresho Mango','Hydrating Fruits','Protein Sprouts','Summer Harvest','Summer Flavours']

    const settings = {
      dots: true,
      infinite: true,
      dotsClass:'one',
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div 
          style={{
            position:"relative",
            width:'fit-content',
            margin:'auto',
            top:'-50px',
            
          }}
        >
          <ul style={{ margin: "0",display:'flex',listStyle:'none'}}> {dots} </ul>
        </div>
      ),
      customPaging:i=>(
        
       <div
          style={{
            width: "100px",
            padding:'8px 18px',
            fontSize:'12px',
            color: "gray",
            backgroundColor:"#FFFFFFCC"
          }}
        >
          {fruits[i]}
        </div>
       
      )
    };
    return (
      <div id="sliderF">
        <Slider {...settings}>
          <div>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP11805-1200X300-3rdJAN23.jpg" />
          </div>
          <div>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/YXNP14089-1200X300-16032023.jpg" />
          </div>
          <div>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/YXNP13041-1200X300-280223.jpg" />
          </div>
          <div>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/YXNP13038-1200X300-280223.jpg" />
          </div>
          <div>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/YXNP13035-1200X300-280223.jpg" />
          </div>
          <div>
            <img src="https://www.bigbasket.com/media/uploads/banner_images/YXNP13032-1200X300-280223.jpg" />
          </div>
        </Slider>
      </div>
    );
}

