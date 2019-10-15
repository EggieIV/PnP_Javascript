/*changecontent of specified element*/
function changeContent(Element, newTitle) {
    document.getElementById(Element).innerHTML = newTitle;
    //alert("Hello! I am an alert box!");
}

function myFunction(elmnt, clr) {
    elmnt.style.color = clr;
}

/* toggle the width of the side navigation between 20% or 0 */
function toggleNav() {

    var width = document.getElementById("menuDrawer").offsetWidth;
    //alert(width);

    if (width == 0) {
        document.getElementById("menuDrawer").style.width = "20%";
    } else {
        document.getElementById("menuDrawer").style.width = "0";
    }

}

function toggleDrawer(Element) {

    var height = document.getElementById(Element).offsetHeight;
    alert(height);

    if (height = 0) {
        //document.getElementById(Element).style.display = 'contents';
        document.getElementById(Element).style.visibility = "visible";
    } else {
        //document.getElementById(Element).style.display = 'none';
        document.getElementById(Element).style.visibility = "hidden";
    }
    
    
    
    var contents = [];
    
    for (var i = 0; document.getElementById(Element).childElementCount > i; i++){
        var newElement = document.getElementById(Element).childNodes()
    }    
}




function myFunction(Element) {
  var c = document.getElementById(Element).childNodes;
  var txt = "";
  for (var i = 0; i < c.length; i++) {
    txt = txt + c[i].nodeName + "<br>";
  }

alert(txt);
}



//  var map = embed.getElementById("mybody");

var slider1 = document.getElementById("viewingAngle");

//var map = document.getElementById("map");
    var embed = document.getElementById("myEmbed");


slider1.onchange = function () {

    // alert(slider1.value);
    //var element=embed.document.getElementById("myEmbed"); //findet element nicht 


    //embed.style.webkitTransform ="rotateZ(45deg)";kinda working ?....

    //document.getElementById("map").rotateX(slider1.value);
    //alert ('this is '+slider1.value+ ' deg');
    // embed.style.webkitTransform ="rotateZ(" +slider1.value+ "deg)";



   let map= embed.innerHTML;



}

var slider2 = document.querySelector("#centerRotation");
