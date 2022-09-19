var getCssStyle = function(elementId, cssProperty) {
  var elem = document.getElementById(elementId);
  var inlineCssValue = elem.style[cssProperty];


  if (inlineCssValue !== "") {
    elem.style[cssProperty] = '';
  }


  var cssValue = "none";

  if (document.defaultView && document.defaultView.getComputedStyle) {
    cssValue = document.defaultView.getComputedStyle(elem, "").getPropertyValue(cssProperty);

  }

  else if (elem.currentStyle){
    cssProperty = cssProperty.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();

    });
    cssValue = elem.currentStyle[cssProperty];
  }

  if (inlineCssValue === 'block') {
    inlineCssValue = 'none'
  } else {
    inlineCssValue = 'block'
  }

  if (inlineCssValue !== "") {
    elem.style[cssProperty] = inlineCssValue;
  }

  return cssValue;
}

let currentCarousel = 1;

function carouselBack (cssValue) {
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

function carouselForward (cssValue) {
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
