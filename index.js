

window.addEventListener('keydown',function(e){

	const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	if(!audio)return;
	audio.currentTime=0;
	audio.play();
	
});


const main=document.querySelector(".main");
const slider=document.querySelector(".slider");
const logo=document.querySelector(".logo");
const headline=document.querySelector(".headline");

const t1=new TimelineMax();
t1.fromTo(
	main,
	1,
	{height: "0%",ease:Power2easeInOut}
	);


