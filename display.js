//calculate drop spot locations and squares
function calculateCirclePoints()
{
    ctx.save();
    ctx.translate(circleX,circleY);

    for(i = 0; i < circleDegs.length; i++)
    {
        let x = Math.cos(circleDegs[i] * radians) * circleRad * 1.1;
        let y = Math.sin(circleDegs[i] * radians) * circleRad * 1.1;

        ctx.translate(x,y);
        ctx.rotate(circleDegs[i] * radians);

        //calculating range coordinates on the screen that can be clicked on to drop a sound
        // -- these are un-rotated squares
        let startX = Math.round(x + circleX - (tileW*0.5));
        let startY = Math.round(y + circleY - (tileH*0.5));
        let endX = startX + tileW;
        let endY = startY + tileH;

        circleSpots.push([startX,startY,endX,endY]);

        ctx.rotate(-circleDegs[i] * radians);
        ctx.translate(-x,-y);
        
    }

    ctx.translate(-circleX,-circleY);
    ctx.restore();

}

//draw drop spot squares
function drawCirclePoints()
{
    ctx.save();
    ctx.translate(circleX,circleY);

    for(i = 0; i < circleDegs.length; i++)
    {
        let x = Math.cos(circleDegs[i] * radians) * circleRad;
        let y = Math.sin(circleDegs[i] * radians) * circleRad;

        ctx.translate(x,y);
        ctx.rotate(circleDegs[i] * radians);
        
        //top square gets red since it can't be deleted
        if(i == 0)
        { ctx.fillStyle = 'rgba(239,64,54,0.5)'; }
        //other squares
        else { ctx.fillStyle = 'rgba(0,0,0,0.3)'}
        ctx.fillRect(0 - (tileW*0.25),0 - (tileH*0.5),tileW,tileH);

        ctx.rotate(-circleDegs[i] * radians);
        ctx.translate(-x,-y);

    }

    ctx.translate(-circleX,-circleY);
    ctx.restore();

}

//draw any sounds on the screen that have been placed on the melody circle
function drawDroppedItems()
{

    //placing sounds along melody circle
    ctx.save();
    ctx.translate(circleX,circleY);

    for(i = 0; i < circleDegs.length; i++)
    {
        if(circlesFilled[i] != null)
        {
            let x = Math.cos(circleDegs[i] * radians) * circleRad;
            let y = Math.sin(circleDegs[i] * radians) * circleRad;
    
            ctx.translate(x,y);
            ctx.rotate(circleDegs[i] * radians);
            
            //draw sprite on circle
			var tile = tileTypes[circlesFilled[i] + 8];
			ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
            0 - (tileW*(circleScales[i] * 0.25)), 0 - (tileH*(circleScales[i] * 0.5)) - 1,tileW * circleScales[i],tileH * circleScales[i]);

            //controlling animation scale when ball passes the item
            if(circleScales[i] <= circleScaleMin) { circleScales[i] = circleScaleMin; }
            else { circleScales[i] -= 0.003; }
    
            ctx.rotate(-circleDegs[i] * radians);
            ctx.translate(-x,-y);
        }
        
    }

    ctx.translate(-circleX,-circleY);
    ctx.restore();

    //placing sounds on corresponding line
    for(i = 0; i < circleDegs.length; i++)
    {
        if(circlesFilled[i] != null)
        {

            // //draw sprite on line
            var tile = tileTypes[circlesFilled[i]];
            ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
            //scaled placement along line length - also present in character.js
            lineStart + lineLength * (timelineDegs[i]/360) - (tileW * 0.5 * lineScales[i]) - 3, offsetY - (tileH * lineScales[i]) + 10, tileW * lineScales[i], tileH * lineScales[i]);

            //controlling animation scale when ball passes the item
            if(lineScales[i] <= lineScaleMin) { lineScales[i] = lineScaleMin; }
            else { lineScales[i] -= 0.003; }
        }
    }


}

//drawing circle fraction divisions
function drawPartitions()
{

    //draw circle fraction divisions on melody circle 
    let thisI, spanI;
    let prevI = 0;

    for(i = 0; i <= circleDegs.length; i++)
    {
  
        //added an extra count to iteration to revisit the first spot
        if(i != circleDegs.length) { thisI = i; }
        else { thisI = 0; }

        if(circlesFilled[thisI] != null)
        {

             //variable spanI is the distance from one loaded sound to a nother
            spanI = i - prevI;

            //if it seems like this is the only downbeat present, fill in whole circle
            if(spanI == 8) { fillArc(circleX, circleY, circleRad, circleDegs[prevI], circleDegs[0] + 360, circleColors[spanI - 1]); }
            //if not fill the arc between sounds accordingly
            else { fillArc(circleX, circleY, circleRad, circleDegs[prevI], circleDegs[thisI], circleColors[spanI - 1]); }


            //add thicker bar at top of circle
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(circleX, circleY - circleRad + 2);
            ctx.lineTo(circleX, circleY - 2);
            ctx.stroke();

            //move on to the next position to calculate next distance
            prevI = thisI;

        }
    }
}

//circle shape-filling function, includes border
function fillArc(originX, originY, radius, startAngleDeg, endAngleDeg, color)
{

    ctx.fillStyle = color;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    const startAngle = startAngleDeg * radians;
    const endAngle = endAngleDeg * radians;
    ctx.beginPath();
    ctx.moveTo(originX, originY);

    ctx.arc(originX, originY, radius, startAngle, endAngle, false);
    ctx.fill();
    ctx.stroke();
}


//re-calculate the rhythm and fraction of each distance between sounds (spanI)
function assignRhythms()
{
    circleDistances = [];

    let thisI, spanI;
    let prevI = 0;

    for(i = 0; i <= circleDegs.length; i++)
    {
        //added an extra count to iteration to revisit the first spot
        if(i != circleDegs.length) { thisI = i; }
        else { thisI = 0; }

        if(circlesFilled[thisI] != null)
        {
            spanI = i - prevI;

            if(i != 0)
            {
                circleDistances.push(spanI);
                prevI = thisI;
            }

        }
    }
}

//draw the rhythm or fraction graphics on the screen
//map all graphics to the line as well
function drawPartitionRhythmsAndBoxes()
{
    let spanCircle;

    for(i = 0; i < circleDistances.length; i++)
    {

        //calculate how far along we are in the total circle, 
        //as well as the distance between this point and the next
        if(i > 0) { 
            spanCircle = spanCircle + circleDistances[i-1];
            spanI = circleDistances[i];
        }
        else { 
            spanCircle = 0;
            if(circleDistances.length == 1) { spanI = 8; }
            else { spanI = circleDistances[i]; }
        }

        let x = Math.cos(circleDegs[spanCircle] * radians) * circleRad;
        let y = Math.sin(circleDegs[spanCircle] * radians) * circleRad;

        //draw position of rhythmic value by rotating to circle position, 
        //re-rotating to regular orientation, and making minor adjustments depending on what kind of rhythm it is
        ctx.save();
        ctx.translate(circleX + x, circleY + y);
        ctx.rotate((circleDegs[spanCircle]) * radians); 

        ctx.translate(-tileW * 1.5, -tileH * 0.5);

        let shiftX, shiftY;

        //minor adjustments for each rhythm type
        if(spanI == 1) {    shiftX = tileW*0.6;            shiftY = tileH*1.1; }
        if(spanI == 2) {    shiftX = tileW*0.2;            shiftY = tileH*1.5; }
        if(spanI == 3) {    shiftX = -tileW*0.333;         shiftY = tileH*1.6666; }
        if(spanI == 4) {    shiftX = -tileW*0.8;          shiftY = tileH*1.6; }
        if(spanI == 5) {    shiftX = -tileW*0.75;            shiftY = tileH*1.5; }
        if(spanI == 6) {    shiftX = -tileW*1.4;            shiftY = tileH*1.4; }
        if(spanI == 7) {    shiftX = -tileW*1.8;            shiftY = tileH*0.75; }
        if(spanI == 8) {    shiftX = -tileW*1.5;            shiftY = tileH*0.5; }

        ctx.translate(shiftX, shiftY);
        ctx.rotate((360-circleDegs[spanCircle]) * radians);
        
        //rhythms 5 and 7 are double tiles so treated differently
        if(spanI == 5 || spanI == 7) { ctx.translate(-tileW, -tileH*0.5); }
        else { ctx.translate(-tileW*0.5, -tileH*0.5); }

        //rhythms or fractions
        let tile;
        if(isNotes) { tile = tileTypes[spanI + 20]; }
        else { tile = tileTypes[spanI + 28]; }

        //draw image on circle
        let thisTileW, thisTileH;
        if(spanI + 20 == 25 && isNotes) { thisTileW = tileW*2; thisTileH = tileH; }
        else if(spanI + 20 == 27 && isNotes) { thisTileW = tileW*2; thisTileH = tileH * 1.2; }
        else { thisTileW = tileW; thisTileH = tileH; }
        ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
        0,0,thisTileW,thisTileH);

        ctx.restore();

        //draw box on corresponding line and rhythms all at once
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 10;
        ctx.fillStyle = circleColors[spanI - 1];

        let boxTileW, boxTileH, rhythmX;
        let boxScale = 0.75;

        boxTileW = tileW * boxScale; boxTileH = tileH * boxScale;

        //if there's only one sound on the melody circle;
        if(spanI == 8)
        { 
            //draw box
            ctx.strokeRect(lineStart + (lineLength * (timelineDegs[spanCircle]/360)), offsetY, lineLength, tileH); 
            ctx.fillRect(lineStart + (lineLength * (timelineDegs[spanCircle]/360)), offsetY, lineLength, tileH);

            //rhythm offset
            rhythmX = (lineLength * 0.5) + lineStart - (boxTileW*0.5);
        }
        //if there's multiple sounds on the melody circle
        else 
        { 
            //draw box
            ctx.strokeRect(lineStart + (lineLength * (timelineDegs[spanCircle]/360)), offsetY, lineLength * (timelineDegs[spanI]/360), tileH); 
            ctx.fillRect(lineStart + (lineLength * (timelineDegs[spanCircle]/360)), offsetY, lineLength * (timelineDegs[spanI]/360), tileH);
            
            //rhythm offset
            if(spanI + 20 == 25 && isNotes) { boxTileW = tileW*2 * boxScale; boxTileH = tileH*boxScale; }
            else if(spanI + 20 == 27 && isNotes) { boxTileW = tileW*2 * boxScale; boxTileH = tileH * 1.2 * boxScale; }
            else { boxTileW = tileW * boxScale; boxTileH = tileH * boxScale; }

            rhythmX = (lineStart + (lineLength * (timelineDegs[spanCircle]/360)) + (lineLength * (timelineDegs[spanI]/360)) * 0.5) - (boxTileW*0.5);

        }

        //draw rhythm in the box
        ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
            rhythmX,offsetY * 1.0125,boxTileW,boxTileH);
        

    }

}

function randomInt(max)
{
    let rand_val = Math.floor(Math.random() * Math.floor(max + 1))
    return rand_val;
}
