import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"

function CarouselItem({ imgs }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                imgs.map(
                    (img, idx) =>
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                )
            }
        </Carousel>
    );
}

export default CarouselItem