//play sound for corresponding tile in circle
function selectSound(i)
{
    if(i == 1) { loads01(); plays01(); }
	if(i == 2) { loads02(); plays02(); }
	if(i == 3) { loads03(); plays03(); }
	if(i == 4) { loads04(); plays04(); }
	if(i == 5) { loads05(); plays05(); }
	if(i == 6) { loads06(); plays06(); }
	if(i == 7) { loads07(); plays07(); }
	if(i == 8) { loads08(); plays08(); }
}

function selectMenuSound(i)
{
    if(i == 1) { loadsmenu01(); playsmenu01(); }
	if(i == 2) { loadsmenu02(); playsmenu02(); }
	if(i == 3) { loadsmenu03(); playsmenu03(); }
	if(i == 4) { loadsmenu04(); playsmenu04(); }
	if(i == 5) { loadsmenu05(); playsmenu05(); }
	if(i == 6) { loadsmenu06(); playsmenu06(); }
	if(i == 7) { loadsmenu07(); playsmenu07(); }
	if(i == 8) { loadsmenu08(); playsmenu08(); }
}

//play background sounds depending on ball position in circle
function selectBgSound(i)
{
	//percussion layer
	if(percOn)
	{
		if(i == 0) { loadp01(); playp01(); }
		if(i == 1) { loadp02(); playp02(); }
		if(i == 2) { loadp03(); playp03(); }
		if(i == 3) { loadp04(); playp04(); }
		if(i == 4) { loadp05(); playp05(); }
		if(i == 5) { loadp06(); playp06(); }
		if(i == 6) { loadp07(); playp07(); }
		if(i == 7) { loadp08(); playp08(); }
		if(i == 8) { loadp09(); playp09(); }
		if(i == 9) { loadp10(); playp10(); }
		if(i == 10) { loadp11(); playp11(); }
		if(i == 11) { loadp12(); playp12(); }
		if(i == 12) { loadp13(); playp13(); }
		if(i == 13) { loadp14(); playp14(); }
		if(i == 14) { loadp15(); playp15(); }
		if(i == 15) { loadp16(); playp16(); }
	}

	//bass layer
	if(bassOn)
	{
		if(i == 0) { loadb01(); playb01(); }
		if(i == 1) { loadb02(); playb02(); }
		if(i == 4) { loadb05(); playb05(); }
		if(i == 5) { loadb06(); playb06(); }
		if(i == 8) { loadb09(); playb09(); }
		if(i == 10) { loadb11(); playb11(); }
		if(i == 12) { loadb13(); playb13(); }
		if(i == 13) { loadb14(); playb14(); }
		if(i == 14) { loadb15(); playb15(); }
	}

	//chord layer
	if(chordOn)
	{
		if(i == 0) { loadc01(); playc01(); }
		if(i == 6) { loadc07(); playc07(); }
		if(i == 8) { loadc09(); playc09(); }
		if(i == 11) { loadc12(); playc12(); }
		if(i == 13) { loadc14(); playc14(); }
	}
}

//declare audio buffers
let s01buff = null;
let s02buff = null;
let s03buff = null;
let s04buff = null;
let s05buff = null;
let s06buff = null;
let s07buff = null;
let s08buff = null;
let p01buff = null;
let p02buff = null;
let p03buff = null;
let p04buff = null;
let p05buff = null;
let p06buff = null;
let p07buff = null;
let p08buff = null;
let p09buff = null;
let p10buff = null;
let p11buff = null;
let p12buff = null;
let p13buff = null;
let p14buff = null;
let p15buff = null;
let p16buff = null;
let b01buff = null;
let b02buff = null;
let b05buff = null;
let b06buff = null;
let b09buff = null;
let b11buff = null;
let b13buff = null;
let b14buff = null;
let b15buff = null;
let c01buff = null;
let c07buff = null;
let c09buff = null;
let c12buff = null;
let c14buff = null;
let clickbuff = null;
let smenu01buff = null;
let smenu02buff = null;
let smenu03buff = null;
let smenu04buff = null;
let smenu05buff = null;
let smenu06buff = null;
let smenu07buff = null;
let smenu08buff = null;


//audio loading and playing fuctions
const loads01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s01buff = data);
	};
	request.send();
};

const plays01 = (gainNum, panNum) => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s02buff = data);
	};
	request.send();
};

const plays02 = (gainNum, panNum) => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s03.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s03buff = data);
	};
	request.send();
};

const plays03 = (gainNum, panNum) => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s03buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s04.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s04buff = data);
	};
	request.send();
};

const plays04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s04buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s05buff = data);
	};
	request.send();
};

const plays05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loads06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s06buff = data);
	};
	request.send();
};

const plays06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};




const loads07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s07buff = data);
	};
	request.send();
};

const plays07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};



const loads08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/s08.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => s08buff = data);
	};
	request.send();
};

const plays08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = s08buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};





const loadp01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p01buff = data);
	};
	request.send();
};

const playp01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p02buff = data);
	};
	request.send();
};

const playp02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p03.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p03buff = data);
	};
	request.send();
};

const playp03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p03buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p04.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p04buff = data);
	};
	request.send();
};

const playp04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p04buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p05buff = data);
	};
	request.send();
};

const playp05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p06buff = data);
	};
	request.send();
};

const playp06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p07buff = data);
	};
	request.send();
};

const playp07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p08.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p08buff = data);
	};
	request.send();
};

const playp08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p08buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p09.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p09buff = data);
	};
	request.send();
};

const playp09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p09buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p10.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p10buff = data);
	};
	request.send();
};

const playp10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p10buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p11.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p11buff = data);
	};
	request.send();
};

const playp11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p11buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p12.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p12buff = data);
	};
	request.send();
};

const playp12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p12buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p13.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p13buff = data);
	};
	request.send();
};

const playp13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p13buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p14.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p14buff = data);
	};
	request.send();
};

const playp14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p14buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p15.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p15buff = data);
	};
	request.send();
};

const playp15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p15buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadp16 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/p16.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => p16buff = data);
	};
	request.send();
};

const playp16 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = p16buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadb01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b01buff = data);
	};
	request.send();
};


const playb01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadb02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b02buff = data);
	};
	request.send();
};

const playb02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadb03 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b03.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b03buff = data);
// 	};
// 	request.send();
// };

// const playb03 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b03buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadb04 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b04.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b04buff = data);
// 	};
// 	request.send();
// };

// const playb04 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b04buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadb05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b05buff = data);
	};
	request.send();
};

const playb05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadb06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b06buff = data);
	};
	request.send();
};

const playb06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadb07 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b07.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b07buff = data);
// 	};
// 	request.send();
// };

// const playb07 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b07buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadb08 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b08.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b08buff = data);
// 	};
// 	request.send();
// };

// const playb08 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b08buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadb09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b09.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b09buff = data);
	};
	request.send();
};

const playb09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b09buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadb10 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b10.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b10buff = data);
// 	};
// 	request.send();
// };

// const playb10 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b10buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadb11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b11.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b11buff = data);
	};
	request.send();
};

const playb11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b11buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadb12 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b12.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b12buff = data);
// 	};
// 	request.send();
// };

// const playb12 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b12buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadb13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b13.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b13buff = data);
	};
	request.send();
};

const playb13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b13buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadb14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b14.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b14buff = data);
	};
	request.send();
};

const playb14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b14buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadb15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/b15.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => b15buff = data);
	};
	request.send();
};

const playb15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = b15buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadb16 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/b16.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => b16buff = data);
// 	};
// 	request.send();
// };

// const playb16 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = b16buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };



const loadc01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/c01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => c01buff = data);
	};
	request.send();
};

const playc01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = c01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadc02 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c02.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c02buff = data);
// 	};
// 	request.send();
// };

// const playc02 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c02buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadc03 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c03.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c03buff = data);
// 	};
// 	request.send();
// };

// const playc03 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c03buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadc04 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c04.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c04buff = data);
// 	};
// 	request.send();
// };

// const playc04 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c04buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadc05 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c05.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c05buff = data);
// 	};
// 	request.send();
// };

// const playc05 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c05buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadc06 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c06.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c06buff = data);
// 	};
// 	request.send();
// };

// const playc06 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c06buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadc07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/c07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => c07buff = data);
	};
	request.send();
};

const playc07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = c07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadc08 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c08.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c08buff = data);
// 	};
// 	request.send();
// };

// const playc08 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c08buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadc09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/c09.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => c09buff = data);
	};
	request.send();
};

const playc09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = c09buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadc10 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c10.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c10buff = data);
// 	};
// 	request.send();
// };

// const playc10 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c10buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadc11 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c11.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c11buff = data);
// 	};
// 	request.send();
// };

// const playc11 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c11buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadc12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/c12.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => c12buff = data);
	};
	request.send();
};

const playc12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = c12buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadc13 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c13.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c13buff = data);
// 	};
// 	request.send();
// };

// const playc13 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c13buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


const loadc14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/c14.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => c14buff = data);
	};
	request.send();
};

const playc14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = c14buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


// const loadc15 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c15.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c15buff = data);
// 	};
// 	request.send();
// };

// const playc15 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c15buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };


// const loadc16 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/c16.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => c16buff = data);
// 	};
// 	request.send();
// };

// const playc16 = () => {
// 	const source = audioCtx.createBufferSource();
//   	source.buffer = c16buff;
// 	source.connect(audioCtx.destination);
//  	source.start(audioCtx.currentTime); // play the source immediately
// };

const loadclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/click.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => clickbuff = data);
	};
	request.send();
};

const playclick = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = clickbuff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


//menu click sounds for bells
const loadsmenu01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu01.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu01buff = data);
	};
	request.send();
};

const playsmenu01 = (gainNum, panNum) => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu01buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadsmenu02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu02.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu02buff = data);
	};
	request.send();
};

const playsmenu02 = (gainNum, panNum) => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu02buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadsmenu03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu03.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu03buff = data);
	};
	request.send();
};

const playsmenu03 = (gainNum, panNum) => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu03buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadsmenu04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu04.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu04buff = data);
	};
	request.send();
};

const playsmenu04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu04buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadsmenu05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu05.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu05buff = data);
	};
	request.send();
};

const playsmenu05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu05buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadsmenu06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu06.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu06buff = data);
	};
	request.send();
};

const playsmenu06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu06buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};




const loadsmenu07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu07.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu07buff = data);
	};
	request.send();
};

const playsmenu07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu07buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};



const loadsmenu08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/smenu08.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => smenu08buff = data);
	};
	request.send();
};

const playsmenu08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = smenu08buff;
	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};