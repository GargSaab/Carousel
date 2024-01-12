import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({
  images,
  autoplayInterval = 2000,
  showDots = true,
  showThumbnails = true,
  slidesContainerHeight = "60vh",
  showArrowIcons = true, // New prop for arrow icons
  customStyles = {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval;

    if (autoplayInterval > 0) {
      interval = setInterval(() => {
        goToSlide((currentSlide + 1) % images.length);
      }, autoplayInterval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, images.length, autoplayInterval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + images.length) % images.length);
  };

  const renderSlides = () => {
    return images.map((image, index) => (
      <div
        key={index}
        style={{
          ...styles.slide,
          backgroundImage: `url(${image})`,
          ...(index === currentSlide && { display: "block" }),
          ...customStyles.slide,
        }}
      />
    ));
  };

  const renderDots = () => {
    if (!showDots) {
      return null;
    }

    return (
      <div style={styles.dotContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...styles.dot,
              ...(index === currentSlide && { backgroundColor: "#3498db" }),
            }}
          />
        ))}
      </div>
    );
  };

  const renderThumbnails = () => {
    if (!showThumbnails) {
      return null;
    }

    return (
      <div style={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail-${index}`}
            style={{
              ...styles.thumbnail,
              ...(index === currentSlide && { border: "2px solid #3498db" }),
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    );
  };

  const renderArrowIcons = () => {
    if (!showArrowIcons) {
      return null;
    }

    return (
      <div style={styles.controls}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={styles.icon}
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          style={styles.icon}
          onClick={nextSlide}
        />
      </div>
    );
  };

  return (
    <div style={{ ...styles.carousel, ...customStyles.carousel }}>
      <div style={{ ...styles.slidesContainer, height: slidesContainerHeight }}>
        {renderSlides()}
        {renderDots()}
      </div>
      {renderThumbnails()}
      {renderArrowIcons()}
    </div>
  );
};

const styles = {
  carousel: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "600px", // Adjust as needed
    margin: "auto",
  },
  slidesContainer: {
    position: "relative",
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    overflow: "hidden",
  },
  slide: {
    flex: "0 0 100%", // Each slide takes up the full width
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "none", // Initially hide all slides
  },
  controls: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transform: "translateY(-50%)",
  },
  dotContainer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#bbb",
    margin: "0 5px",
    cursor: "pointer",
  },
  thumbnailContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  thumbnail: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    cursor: "pointer",
    margin: "0 5px",
  },
  icon: {
    fontSize: "2em",
    cursor: "pointer",
    color: "#3498db",
  },
};

export default Carousel;
