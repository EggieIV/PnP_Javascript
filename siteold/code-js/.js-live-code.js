function changeContent(Element, newTitle) {
    document.getElementById(Element).innerHTML = newTitle;
    alert("Hello! I am an alert box!");
}

function myFunction(elmnt, clr) {
    elmnt.style.color = clr;
}

function toggleNav() {
console.log(function)

    var width = document.getElementById("newMenuDrawer").offsetWidth();


    alert(width);

    if (document.getElementById("newMenuDrawer").offsetWidth > "0") {
        alert("Toggle");
        document.getElementById("newMenuDrawer").style.width = "250 px";
    } else {
        alert("Toggle2")
        document.getElementById("newMenuDrawer").style.width = "0";
    }

}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
