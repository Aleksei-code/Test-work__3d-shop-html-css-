// let city1=document.getElementsByClass("menu__text-city");
// console.log (city1)

// let sheng=document.getElementById("sheng");
//  sheng.onchange=function(){
//  alert("1");
//      var city1=document.getElementByClass("menu__text-city");
//      console.log (city1)
//      var para=document.createElement("option");
//      para.innerHTML="M";
//      alert(para.innerHTML);
//     city1.appendChild(para);	
// }

function Drop () {
  let el = document.getElementById("cities-dropdown");
  console.log (el.style.display)
  if (el.style.display === 'active') {
    console.log ('active')
    map.set (el.style.display) = none;
    'cities-dropdown'.style.display = none
    console.log (el.style.display)
            }
            else {
              console.log ('none')
            }
}


var getCssStyle = function(elementId, cssProperty) {
  var elem = document.getElementById(elementId);
  var inlineCssValue = elem.style[cssProperty];
  // If the inline style exists remove it, so we have access to the original CSS

  console.log (inlineCssValue)
  if (inlineCssValue !== "") {
    elem.style[cssProperty] = '';
    console.log ('ya sdelal')
  }


  var cssValue = "none";
  // For most browsers
  if (document.defaultView && document.defaultView.getComputedStyle) {
    cssValue = document.defaultView.getComputedStyle(elem, "").getPropertyValue(cssProperty);
  console.log ('ya cheto delayi')
  }

  else if (elem.currentStyle){
    cssProperty = cssProperty.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();

    });
    cssValue = elem.currentStyle[cssProperty];
  }

  console.log (inlineCssValue)
  // Put the inline style back if it had one originally
  if (inlineCssValue !== "") {
    elem.style[cssProperty] = inlineCssValue;
  }

  console.log (elem.classList)
  return cssValue;
}


function Abcd (cssValue) {
   getCssStyle ('cities-dropdown', 'display');
}

// var Dropdowns = {

//     init: function() {
//       Dropdowns.observeTriggers();
//     },
  
//     observeTriggers: function() {
//       $('.menu-dropdown-panel').click(function(e) {
//         e.preventDefault();
//         var panelId = $(this).attr('data-panel-id');
//         if ($(this).hasClass('active')) {
//           $(this).removeClass('active');
//           $('#'+panelId).hide();
//         }
//         else {
//           $(this).addClass('active');
//           $('#'+panelId).show();
//         }
//       });
//     }
//   }