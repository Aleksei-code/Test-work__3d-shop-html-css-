let currentCarousel = 1;

function carouselBack () {
  if (currentCarousel === 1) {
    currentCarousel++
    getCssStyle ('sliderMainBlock1', 'display');
    getCssStyle ('sliderMainBlock2', 'display');
  } else if (currentCarousel === 2) {
    currentCarousel++
    getCssStyle ('sliderMainBlock2', 'display');
    getCssStyle ('sliderMainBlock3', 'display');
  } else if (currentCarousel === 3) {
    currentCarousel = 1
    getCssStyle ('sliderMainBlock1', 'display');
    getCssStyle ('sliderMainBlock3', 'display');
  }
}

function carouselForward () {
  if (currentCarousel === 1) {
    currentCarousel = 3
    getCssStyle ('sliderMainBlock1', 'display');
    getCssStyle ('sliderMainBlock3', 'display');
  } else if (currentCarousel === 2) {
    currentCarousel--
    getCssStyle ('sliderMainBlock1', 'display');
    getCssStyle ('sliderMainBlock2', 'display');
  } else if (currentCarousel === 3) {
    currentCarousel--
    getCssStyle ('sliderMainBlock2', 'display');
    getCssStyle ('sliderMainBlock3', 'display');
  }
}
