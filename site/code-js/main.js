// Functions here:

 /**
  * \brief Toggles Navigationbar
  *
  *     Toggles the Css width of Navabr
  *
  * \param no Parameter Used
  * \return no return value
  *
  */
function toggleNav() {

    var width = document.getElementById("navBar").offsetWidth;
    //alert(width);

    if (width == 0) {
        document.getElementById("navBar").style.width = "20%";
    } else {
        document.getElementById("navBar").style.width = "0";
    }

}


 /**
  * \brief Toggles Drawer
  *
  *     Toggles the Css height of daughter Element
  *
  * \param no Parameter Used
  * \return no return value
  *
  */
function collapseDrawer() {
	//alert(event.srcElement.id);
	var collapsible = event.srcElement; // gets executor
	
    event.srcElement.classList.toggle("active");
	
	var drawerContent = event.srcElement.nextElementSibling;
    if (drawerContent.style.maxHeight){
      drawerContent.style.maxHeight = null;
    } else {
      drawerContent.style.maxHeight = drawerContent.scrollHeight + "px";
    } 
	
}


 /**
  * \brief Toggles Drawer
  *
  *     Toggles the Css height of daughter Element
  *
  * \param no Parameter Used
  * \return no return value
  *
  */
function toggleNav() {

    var width = document.getElementById("navBar").offsetWidth;
    //alert(width);

    if (width == 0) {
        document.getElementById("navBar").style.width = "20%";
    } else {
        document.getElementById("navBar").style.width = "0";
    }

}


function myFunction(elmnt, clr) {
    elmnt.style.color = clr;
}

function changeContent(Element, newTitle) {
    document.getElementById(Element).innerHTML = newTitle;
    //alert("Hello! I am an alert box!");
}


// Variables here:

var i; //global init of counter



// Init Code here:

 /**
  * \brief Initialisation of Drawers
  *
  *     this loop binds the drawers to a function which expands or closes the Drawer
  *
  * \param no Parameter Used
  * \return no return value
  *
  *
for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var drawerContent = this.nextElementSibling;
    if (drawerContent.style.maxHeight){
      drawerContent.style.maxHeight = null;
    } else {
      drawerContent.style.maxHeight = drawerContent.scrollHeight + "px";
    } 
  });
}
*/