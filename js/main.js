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


function Abcd (cssValue) {
   getCssStyle ('citiesDropdown', 'display');
}


function cityChange(id) {
  let b = document.getElementById(id).innerHTML;
  document.getElementById('currentCity').innerHTML = b
}

