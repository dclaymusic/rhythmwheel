function Character()
{ 
    this.angle = 270;
    this.angleSpeed = 1.5;
    this.lineangle = this.angle - 270;
    this.rads = this.angle * radians;
    this.linerotation = 0;
    this.x = Math.cos(this.rads) * circleRad;
    this.y = Math.sin(this.rads) * circleRad;
    this.startTime = currentFrameTime;
    this.animation = true;
    this.maintile = tileTypes[17];
    this.linetile = tileTypes[19];
           
}

Character.prototype.draw = function()
{
    ctx.save();
    ctx.translate(circleX,circleY);

    ctx.translate(this.x,this.y);
    ctx.rotate(this.rads);

    //select corresponding sound for background music
    for(i = 0; i < bgSnds.length; i++)
    {
        if(this.angle == bgSnds[i])
        {
            selectBgSound(i);
        }
    }

    //check position to see if there's a sound placed
    for(i = 0; i < circleDegs.length; i++)
    {
        if(this.angle == circleDegs[i] && circlesFilled[i] != null)
        {
            selectSound(circlesFilled[i]);
            circleScales[i] = circleScaleMax;
            lineScales[i] = lineScaleMax;
        }
    }

    //update angle and therefore position
    if(this.lineangle >= 360) { this.lineangle = 0; }
    else { this.lineangle+= this.angleSpeed; }

    if(this.angle >= 360) { this.angle = 0; }
    else { this.angle += this.angleSpeed; }

    this.rads = this.angle * radians;
    this.x = Math.cos(this.rads) * circleRad;
    this.y = Math.sin(this.rads) * circleRad;

    //scale size of object
    let tileScale = 0.8;

    //draw ball on circle
    ctx.drawImage(tileset, this.maintile.sprite[0].x, this.maintile.sprite[0].y, this.maintile.sprite[0].w, this.maintile.sprite[0].h,
    0,0 - (tileH*0.5),tileW * tileScale,tileH * tileScale);

    ctx.rotate(-this.rads);
    ctx.translate(-this.x,-this.y);

    ctx.translate(-circleX,-circleY);
    ctx.restore();

    //draw ball on line
    let tileX = (lineStart - ((tileW*tileScale)*0.5) + (lineLength*0.88) * (this.lineangle/360)) + (tileW*tileScale);
    let tileY = (offsetY - ((tileH*tileScale)*0.5));
    ctx.save();
    ctx.translate(tileX, tileY);
    ctx.rotate(this.linerotation * Math.PI / 180);
    ctx.drawImage(tileset, this.linetile.sprite[0].x, this.linetile.sprite[0].y, this.linetile.sprite[0].w, this.linetile.sprite[0].h,
        //scaled placement along line length; also present in display.js
        -(tileW*tileScale)*0.5,-(tileH*tileScale)*0.5, tileW * tileScale, tileH * tileScale);
    
    ctx.translate(-tileX,  -tileY);
    ctx.rotate(this.linerotation * Math.PI / 180 * -1);
    ctx.restore();  
    
    //update rotation for animation on line
    this.linerotation+= 3;

};