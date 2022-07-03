//start game function
function startGame() { 

    let loadscreen = document.querySelector('#loadscreen');
    loadscreen.style.visibility = 'hidden';
    
    document.getElementById("gamefoot").style.visibility = 'visible';
    document.getElementById("gamehead").style.visibility = 'visible';

    hasStarted = true;

    assignRhythms();
    toggleSpeed(1.5);

}

//loading screen
function loadbarHandler()
{
    let loadbarloading = document.getElementById('loadbarloading');
    loadbarloading.style.width = (checkBuffers()/numberOfSounds) * 200 + 'px';
    //before start
    if(checkBuffers() == numberOfSounds)
    {
        allBuffersLoaded = true;
        let loadtext = document.getElementById('loadtext');
        loadtext.innerHTML = '(Click anywhere to begin.)';
        loadtext.style.left = '122px';
        let loadbarloading = document.getElementById('loadbarloading');
        loadbarloading.style.backgroundColor = 'rgba(0,255,100,1)';
    }
    else 
    { } //opening state;
}

//buffer loadbar
function drawBuffer()
{
    ctx.strokeStyle = 'black';
    ctx.lineWidth = '1';
    // ctx.strokeRect(0, 0, w, h);
    ctx.strokeRect(window.innerWidth/2, window.innerHeight/2, 300, 20);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(window.innerWidth/2, window.innerHeight/2, checkBuffers() * (300/numberOfSounds), 20);
}

//show which sounds are loaded
function checkBuffers()
{
    let buffCount = 0;

    if(s01buff != null) { buffCount++; }
    if(s02buff != null) { buffCount++; }
    if(s03buff != null) { buffCount++; }
    if(s04buff != null) { buffCount++; }
    if(s05buff != null) { buffCount++; }
    if(s06buff != null) { buffCount++; }
    if(s07buff != null) { buffCount++; }
    if(s08buff != null) { buffCount++; }
    if(p01buff != null) { buffCount++; }
    if(p02buff != null) { buffCount++; }
    if(p03buff != null) { buffCount++; }
    if(p04buff != null) { buffCount++; }
    if(p05buff != null) { buffCount++; }
    if(p06buff != null) { buffCount++; }
    if(p07buff != null) { buffCount++; }
    if(p08buff != null) { buffCount++; }
    if(p09buff != null) { buffCount++; }
    if(p10buff != null) { buffCount++; }
    if(p11buff != null) { buffCount++; }
    if(p12buff != null) { buffCount++; }
    if(p13buff != null) { buffCount++; }
    if(p14buff != null) { buffCount++; }
    if(p15buff != null) { buffCount++; }
    if(p16buff != null) { buffCount++; }
    if(b01buff != null) { buffCount++; }
    if(b02buff != null) { buffCount++; }
    if(b05buff != null) { buffCount++; }
    if(b06buff != null) { buffCount++; }
    if(b09buff != null) { buffCount++; }
    if(b11buff != null) { buffCount++; }
    if(b13buff != null) { buffCount++; }
    if(b14buff != null) { buffCount++; }
    if(b15buff != null) { buffCount++; }
    if(c01buff != null) { buffCount++; }
    if(c07buff != null) { buffCount++; }
    if(c09buff != null) { buffCount++; }
    if(c12buff != null) { buffCount++; }
    if(c14buff != null) { buffCount++; }
    if(clickbuff != null) { buffCount++; }
    if(smenu01buff != null) { buffCount++; }
    if(smenu02buff != null) { buffCount++; }
    if(smenu03buff != null) { buffCount++; }
    if(smenu04buff != null) { buffCount++; }
    if(smenu05buff != null) { buffCount++; }
    if(smenu06buff != null) { buffCount++; }
    if(smenu07buff != null) { buffCount++; }
    if(smenu08buff != null) { buffCount++; }

    return buffCount;
}

function frameRate()
{
    ////////////frame rate check
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "start";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}
