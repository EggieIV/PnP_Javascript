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

    if (width === 0) {
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
    if (drawerContent.style.maxHeight) {
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

    if (width === 0) {
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

function appendDiv(name, targetElement, index, tileHeight) {
    var template = document.createElement("div");
    template.className = name;
    template.id = name + index;
    if (name === "tile") {

        template.style.height = tileHeight + "px"; //solution is not dynamic
    }
    var element = document.getElementById(targetElement);
    element.appendChild(template);
}

function drawPlain(numOfTilesX, numOfTilesY) {
    var bodyHeight = document.getElementById("levelContainer").clientHeight;
    //alert(bodyHeight);
    var rowIndex = -1;
    for (var i = 0; i < numOfTilesX * numOfTilesY; i++) {

        if ((i % numOfTilesY) == 0) {
            rowIndex++;
            appendDiv("row", "levelContainer", rowIndex, 0);
        }

        appendDiv("tile", "row" + rowIndex, i, bodyHeight / numOfTilesY); // stupid bodged solution only applies to screen

    }
    //document.getElementById("levelcontainer").height = 200;

}

function updateFigurine(srcIndexOrContent, destIndex, type = 0, min = 0, max = 624) {
    if (typeof (destIndex) != "number") {

        var random = Math.round(Math.random() * (max - min) + min)
        while (random == srcIndexOrContent) {
            random = Math.round(Math.random() * (max - min) + min)
        }
        destIndex = random;
    }

    if (typeof (srcIndexOrContent) == "number") {

        var parentNode = document.getElementById("tile" + srcIndexOrContent);
        if (parentNode.firstChild) { // immer nur erstes kind aenderungsbedarf, figur by id finden und entfernen
            
            //!!! firstchild ist erst hinzugefuegtes element 
            //firstchild behaves like kellerspeicher bottom down discuss if wanted 
            
            var template = parentNode.removeChild(parentNode.firstChild) // cut child element
        }
        //alert(parentNode.firstChild)
        if (parentNode.firstChild != null) { // falls noch ein child element exiatiert bestimme typ und faerbe flaeche
            // catch non existing child
            if (template.className === "char enemy") {
                document.getElementById("tile" + destIndex).style.background = "rgba(255, 0, 0, 0.3)";
            } else if (template.className === "char ally") {
                document.getElementById("tile" + destIndex).style.background = "rgba(0, 255,0, 0.3)";
            } else {
                document.getElementById("tile" + destIndex).style.background = "rgba(255, 255, 0, 0.3)";
            }



        } else {
            document.getElementById("tile" + srcIndexOrContent).style.background = "rgba(0, 0, 255, 0.3)"; // falls kein child exisitert faerbe flaeche neutral
        }


    } else {
        // importiere cher 

        //placholder creation
        var template = document.createElement("embed");

        if (type == 1) {
            template.className = "char enemy";
        } else if (type == 2) {
            template.className = "char ally";
        } else
            template.className = "char neutral";
        template.id = "Lucina";
        template.src = "https://66.media.tumblr.com/1b1a6f840461273875f2853edbd22534/tumblr_orb77x4Ogh1w8kmjqo1_250.png";
    }

    document.getElementById("tile" + destIndex).appendChild(template);


    if (template.className === "char enemy") {
        document.getElementById("tile" + destIndex).style.background = "rgba(255, 0, 0, 0.3)";
    } else if (template.className === "char ally") {
        document.getElementById("tile" + destIndex).style.background = "rgba(0, 255,0, 0.3)";
    } else {
        document.getElementById("tile" + destIndex).style.background = "rgba(255, 255, 0, 0.3)";
    }





}


// Variables here:

var i; //global init of counter



// Init Code here:

//if ($.browser.mozilla) {verticalSlider.style.transform ="rotateZ(0)";}
