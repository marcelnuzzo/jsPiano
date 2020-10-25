// ------------------------
// 1- définition des touches et des fichiers musiques associées
let src1 = 'C#.mp3'
let obj1 =encodeURIComponent(src1)
let src2 = 'D#.mp3'
let obj2 =encodeURIComponent(src2)
let src3 = 'F#.mp3'
let obj3 =encodeURIComponent(src3)
let src4 = 'G#.mp3'
let obj4 =encodeURIComponent(src4)
let src5 = 'A#.mp3'
let obj5 =encodeURIComponent(src5)
var keyboard = [
	{ 'charCode':113,'keyName':'C','music':'C.mp3'},
	{ 'charCode':115,'keyName':'C#','music': obj1},
	{ 'charCode':100,'keyName':'D','music':'D.mp3'},
	{ 'charCode':102,'keyName':'D#','music': obj2},
	{ 'charCode':103,'keyName':'E','music':'E.mp3'},
	{ 'charCode':104,'keyName':'F','music':'F.mp3'},
	{ 'charCode':106,'keyName':'F#','music': obj3},
    { 'charCode':107,'keyName':'G','music':'G.mp3'},
    { 'charCode':108,'keyName':'G#','music': obj4},
    { 'charCode':109,'keyName':'A','music':'A.mp3'},
    { 'charCode':119,'keyName':'A#','music': obj5},
    { 'charCode':120,'keyName':'B','music':'B.mp3'},
];
//  console.log( keyboard );
// ------------------------
// 2- construction du code HTML des TOUCHES
var div_audio_keyboard = document.getElementById('audio-keyboard');
keyboard.forEach( function(key){
	// audio-keyboard
	var div_touche = document.createElement('div');
	div_touche.className = 'touche';
	div_touche.setAttribute('id','touche-'+key.charCode);
	div_touche.setAttribute('data-key',key.charCode);
	div_touche.setAttribute('data-music',key.music);
	div_touche.textContent = key.keyName;
	div_audio_keyboard.appendChild(div_touche);
  // de la forme : <div class="touche" id="touche-113" data-key="113" data-music="xxxxxxxxxx.mp3">Q</div>
});
// ------------------------
// 3- click sur une TOUCHE (ECRAN)
var touches = document.querySelectorAll('.touche');
touches.forEach( function(touche){
	touche.addEventListener('click',function(){
//		console.log('play : '+touche.dataset.key );
		playSound(touche);
	});
});
// ------------------------
// 4- click au CLAVIER
document.addEventListener('keypress', function(event){
//	console.log(event);
  var touche = document.getElementById('touche-'+event.charCode);
	if( touche ) { playSound(touche); }
});
// ------------------------
// 5- play
function playSound(touche){
	// touche
	touche.style.backgroundColor = "grey";
	setTimeout(function(){ touche.style.backgroundColor = ""; }, 200);
	// player audio
	var audio = new Audio(touche.dataset.music);
	audio.play();
}
// ------------------------