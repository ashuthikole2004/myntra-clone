import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="/carousel/1.jpg"
          text="First slide"
          className="carousel-image"
        />
        <Carousel.Caption>
          <h3>Festive Sale Kurtis</h3>
          <p>80% OFF.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/carousel/2.jpg"
          text="Second slide"
          className="carousel-image"
        />
        <Carousel.Caption>
          <h3>Long Kurtis</h3>
          <p>50-80% OFF.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/carousel/3.png"
          text="Third slide"
          className="carousel-image"
        />
        <Carousel.Caption>
          <h3>Diwali Sale</h3>
          <p>50-80% OFF Last Minute Dhamakedar Deals.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
