import React, { useState, useEffect } from "react";
import './Carousel.css';

const CarouselIndicators = ({ images, currentIndex, onClick }) => {
    return (
        <div className="carousel-indicators">
            {images.map((_, index) => (
                <span
                    key={index}
                    className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                    onClick={() => onClick(index)}
                ></span>
            ))}
        </div>
    );
};

const Carousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(nextImage, interval);
        return () => {
            clearInterval(autoPlayInterval);
        };
    });

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    

    return (
        <div className="carousel">
            <img
                src={images[currentIndex]}
                alt="carousel"
                className="carousel-image"
            />
            <CarouselIndicators
                images={images}
                currentIndex={currentIndex}
                onClick={goToImage}
            />
        </div>
    );
};

export default Carousel;