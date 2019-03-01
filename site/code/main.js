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
}

