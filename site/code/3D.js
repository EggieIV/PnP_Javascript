/* ==================== RangeDisplay ==================== */

// displays the value of a range input
// why isn't this in the HTML5 spec?
function RangeDisplay(input) {
    this.input = input;
    this.output = document.createElement('span');
    this.output.className = 'range-display';
    this.units = this.input.getAttribute('data-units') || '';
    // events
    var onChange = this.update.bind(this);
    this.input.addEventListener('change', onChange);
    this.input.addEventListener('input', onChange);
    // set initial output
    this.update();
    this.input.parentNode.appendChild(this.output);
}

RangeDisplay.prototype.update = function () {
    this.output.textContent = this.input.value + this.units;
};

/* ==================== init ==================== */

// init RangeDisplays
var ranges = document.querySelectorAll('input[type="range"]');
for (var i = 0; i < ranges.length; i++) {
    new RangeDisplay(ranges[i]);
}



var scene = document.querySelector('.scene');
var cube = document.querySelector('.cube');
var originX = 50;
var originY = 50;

function createTile(tileWidth, tileHeight, index, rowNum) {
    var tile = document.createElement("div");
    tile.className = "tile"
    tile.id = "Tile" + index;
    tile.style.width = tileWidth + "px";
    tile.style.height = tileHeight + "px";

    //var element = document.getElementById("Row" + rowNum);
    var element = document.getElementById("height0");
    element.appendChild(tile);
}




function drawPlain(numOfTilesX, numOfTilesY) {

    // var myPlain= new Plain(width,height);

    var map = document.getElementById("map");
    var j = -1;

    //alert(map.offsetHeight);

    var tileWidth = 200  / numOfTilesY ;
    var tileHeight = 200 / numOfTilesX ;


    for (i; i < numOfTilesX * numOfTilesY; i++) {

/*        if ((i % numOfTilesY) == 0) {

            var para = document.createElement("div");
            para.className = "row"
            para.id = "Row" + i / numOfTilesY;
            var element = document.getElementById("height0");
            element.appendChild(para);
            j++;


        }*/


        createTile(tileWidth, tileHeight, i, j);
        //createTile(42, 42, i,j);

    }





    /*  var $mainContainer = $("#mainContainer");
      for (i; i < 5; i++) {
          var newDiv = $('<div class="item5">Right</div>');

          //...you can add whatever attributes to the div that you want...

          $mainContainer.append(newDiv);
      }*/









}
