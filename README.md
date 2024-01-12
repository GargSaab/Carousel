<<<<<<< HEAD
# react-featured-carousel
A customizable and feature-rich carousel component for React.
=======
# React Featured Carousel

A customizable and feature-rich carousel component for React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)

## Installation

Install the package using npm:

```bash
npm install react-featured-carousel
```

## Usage

Import the Carousel component and use it in your React application:

```jsx
import React from "react";
import Carousel from "react-featured-carousel";

const App = () => {
  const carouselImages = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <div>
      <Carousel
        images={carouselImages}
        autoplayInterval={5000}
        customStyles={{ carousel: { maxWidth: "800px" } }}
        showDots={true}
        showThumbnails={false}
        slidesContainerHeight="80vh"
        showArrowIcons={true}
      />
    </div>
  );
};

export default App;
```

## Props

### `images` (required)

An array of URLs representing the images to be displayed in the carousel.

### `autoplayInterval`

The interval (in milliseconds) for automatic slide transition. Set to 0 to disable autoplay.

### `showDots`

Show or hide navigation dots at the bottom of the carousel. Defaults to true.

### `showThumbnails`

Show or hide image thumbnails below the carousel. Defaults to false.

### `slidesContainerHeight`

The height of the slides container. Accepts values like "80vh", "500px", etc. Defaults to "60vh".

### `showArrowIcons`

Show or hide navigation arrow icons. Defaults to true.

### `customStyles`

An object allowing you to customize the carousel's style. Example:

```jsx
customStyles={{
  carousel: { maxWidth: "800px" },
  slide: { border: "2px solid red" },
}}
```
>>>>>>> 74f302f (First Commit)
