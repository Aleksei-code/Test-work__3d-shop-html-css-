let city1=document.getElementsByClass("menu__text-city");
console.log (city1)

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

var Dropdowns = {
    init: function() {
      Dropdowns.observeTriggers();
    },
  
    observeTriggers: function() {
      $('.menu-dropdown-panel').click(function(e) {
        e.preventDefault();
        var panelId = $(this).attr('data-panel-id');
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('#'+panelId).hide();
        }
        else {
          $(this).addClass('active');
          $('#'+panelId).show();
        }
      });
    }
  }