function Tile(xCoordinate,yCoordinate,zCoordinate){
    this.xPos = xCoordinate;
    this.yPos = yCoordinate;
    this.zPos = zCoordinate;
    
    this.occupied = false;
}

/* draws a Plain with a XxY board 
    hereby it draws 1/x tiles for 
    1/y times beginning from the top left 
*/
function Plain(xDimension,yDimension){
    this.x = xDimension;
    this.y = yDimension;
    this.tileWidth = 1000/xDimension;
    this.tileHeigth = 1000/yDimension;
    this.map = null;        //imagefile
    this.tileArray = [];
    
    
    
    for(var i = this.y ;i> 0; i--){// determins the count of y 
        
            for(var j = this.x ;j >i; j){// determins the count of X and draws tiles accordingly 
                
                tileArray.push(new Tile (j,i,0)); 
                
            }
        
    }
    
}