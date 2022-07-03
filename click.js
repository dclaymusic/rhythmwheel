
//play button
function togglePlay()
{
    if(isClickable)
    {
        loadclick(); playclick();

        isPlaying = !isPlaying;

        if(isPlaying)
        {
            //make ball
            char = new Character();
            document.getElementById("playbutton").src = "img/stopimg.png";
            document.getElementById("playtext").innerHTML = "Stop";
        }

        else {
            char = null;
            document.getElementById("playbutton").src = "img/playimg.png";
            document.getElementById("playtext").innerHTML = "Play";

        }
    }
}

//when a canvas is clicked on
function clickHandler(event) 
{

    if(!hasStarted && allBuffersLoaded == true)
    { 
        calculateCirclePoints();
        startGame();
    }
    else if(!allBuffersLoaded)
    { }
    else
    {
        const rect = document.getElementById('canvas').getBoundingClientRect();
        var x = Math.floor((event.clientX - rect.left)*2); // divide by a tileW if needed
        var y = Math.floor((event.clientY - rect.top)*2); // divide by a tileH if needed

        if(isClickable)
        {

            //placing sound along melody circle
            if(loadedSound != null)
            {
                //check against circle "drop spot" coordinates, if it's in one, drop the sound
                for(let i = 0; i < circleDegs.length; i++)
                {
                    if(
                        (x >= circleSpots[i][0] && x <= circleSpots[i][2]) &&
                        (y >= circleSpots[i][1] && y <= circleSpots[i][3])
                    )
                    {
                        circlesFilled[i] = loadedSound;
                        document.getElementById("h" + loadedSound).style.visibility = "hidden";
                        loadedSound = null;

                        assignRhythms();
                    }
                }
            }
            else
            {
                //if no sound loaded and a square is clicked, delete the sound that's there
                for(let i = 0; i < circleDegs.length; i++)
                {
                    if(
                        (x >= circleSpots[i][0] && x <= circleSpots[i][2]) &&
                        (y >= circleSpots[i][1] && y <= circleSpots[i][3]) &&
                        i != 0
                    )
                    {
                        circlesFilled[i] = null;

                        assignRhythms();
                    }
                }
            }
        }

    }
}

//mouse hover-over info for loaded sounds
function getHoverOver(event) {
    const rect = document.getElementById('body').getBoundingClientRect();
    var x = Math.floor((event.clientX - rect.left)*2); // divide by a tileW if needed
    var y = Math.floor((event.clientY - rect.top)*2); // divide by a tileH if needed
    return([x,y]);
}

//selected sound image hover-over
function updateLoadedSound()
{
    let h = document.getElementById("h" + loadedSound);
    h.style.left = ((mousePos[0]-(tileW*0.5)) * 0.5) + 'px';
    h.style.top = ((mousePos[1]-(tileH*0.5)) * 0.5) + 'px';
}

//get selected sound as an image element 
function sndPick(snd)
{
    if(isClickable)
    {
        if(loadedSound != null)
        {
            document.getElementById("h" + loadedSound).style.visibility = "hidden";
        }

        loadedSound = snd;
        selectMenuSound(loadedSound);
        let h = document.getElementById("h" + loadedSound);
        h.style.visibility = 'visible';
    }
}

//change speed of wheel
function toggleSpeed(value)
{
    if(isClickable)
    {
        loadclick(); playclick();
        
        percOn = false;
        bassOn = false;
        chordOn = false;

        document.getElementById("bass").src = "img/imgbass.png";
        document.getElementById("perc").src = "img/imgperc.png";
        document.getElementById("chord").src = "img/imgchord.png";

        if(isPlaying)
        {
            char.angleSpeed = value;
            char.angle = 270;
            char.lineangle = 0;
            char.linerotation = 0;
        }

        speedDisplay(value);

    }
}

//change speed display buttons when clicked
function speedDisplay(value) 
{
    if(value == 0.75)
    { 
        document.getElementById("imgslow").src = "img/imgslow2.png";
        document.getElementById("imgmed").src = "img/imgmed.png";
        document.getElementById("imgfast").src = "img/imgfast.png";
    }

    if(value == 1.5)
    { 
        document.getElementById("imgslow").src = "img/imgslow.png";
        document.getElementById("imgmed").src = "img/imgmed2.png";
        document.getElementById("imgfast").src = "img/imgfast.png";
    }

    if(value == 3.0)
    { 
        document.getElementById("imgslow").src = "img/imgslow.png";
        document.getElementById("imgmed").src = "img/imgmed.png";
        document.getElementById("imgfast").src = "img/imgfast2.png";
    }

}

//change display from rhythms to fractions
function toggleDisplay(num)
{
    if(isClickable)
    {
        loadclick(); playclick();
        if(num == 0)
        { 
            document.getElementById("noteimg").src = 'img/note2.png'
            document.getElementById("fractionimg").src = 'img/fraction1.png'
            isNotes = true; 
        }
        else 
        { 
            document.getElementById("noteimg").src = 'img/note1.png'
            document.getElementById("fractionimg").src = 'img/fraction2.png'
            isNotes = false; 
        }
    }
}

//turn on and off info screen
function toggleInfoScreen() {

    isInfoScreen = !isInfoScreen;

    loadclick(); playclick();
    if(isInfoScreen)
    {
        document.getElementById('infoscreen').style.visibility = 'visible';
        isClickable = false;
    }
    else
    {
        document.getElementById('infoscreen').style.visibility = 'hidden';
        isClickable = true;
    }


}

//shuffle sounds on wheel to random selection
function shuffleSounds()
{
    if(isClickable)
    {
        
        for(i = 0; i < circlesFilled.length; i++)
        {
            let ran = Math.random();
            if(ran <= 0.6 && i != 0) { circlesFilled[i] = null; }
            else{ circlesFilled[i] = randomInt(7) + 1; }
        }
        assignRhythms();
    }
}

//clear all sounds on the wheel except the top sound
function clearAllSounds()
{
    if(isClickable)
    {
        
        circlesFilled = [1, null, null, null, null, null, null, null];
        assignRhythms();

    }
}




//mixer

function togglePercGain() 
{
    if(isClickable)
    {

        percOn = !percOn;
        if(percOn)
        {
            document.getElementById("perc").src = "img/imgperc2.png";
        }
        else
        {
            document.getElementById("perc").src = "img/imgperc.png";
        }
    }
}


function toggleBassGain() 
{
    if(isClickable)
    {
        bassOn = !bassOn;
        if(bassOn)
        {
            document.getElementById("bass").src = "img/imgbass2.png";
            
        }
        else
        {
            document.getElementById("bass").src = "img/imgbass.png";
        }
    }

}

function toggleChordGain() 
{
    if(isClickable)
    { 
        chordOn = !chordOn;
        if(chordOn)
        {
            document.getElementById("chord").src = "img/imgchord2.png";
            
        }
        else
        {
            document.getElementById("chord").src = "img/imgchord.png";
        }
    }
}