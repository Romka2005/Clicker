var massivetext=[
	"Hello",
	"World",
	"Cool"
];
var randomnum=Math.floor(Math.random()*3);
alert(massivetext[randomnum]);


var h1Id=document.getElementById('h1');
var buttonId=document.getElementById('button');
var upgradebutton=document.getElementById('upgrade1');
var upgrade2button=document.getElementById('upgrade2');
var upgrade3button=document.getElementById('upgrade3');
var counter=0;
var upgrade0=0.1;
var upgrade0_2=0;
var upgrade0_3=0;
upgradebutton.addEventListener('click', function(){
	if(counter>=20){
		counter=counter-20;
		upgrade=upgrade0+0.1;
		h1Id.textContent='Clicks doing:'+counter;
	}
});
upgrade2button.addEventListener('click', function(){
	if(counter>=200){
		counter=counter-200;
		upgrade0_2=upgrade0_2+1.1;
		h1Id.textContent='Clicks doing:'+counter;
	}
});
upgrade3button.addEventListener('click', function(){
	if(counter>=1000){
		counter=counter-1000;
		upgrade0_2=upgrade0_2+5.6;
		h1Id.textContent='Clicks doing:'+counter;
	}
});
buttonId.addEventListener('click', function(){
	counter=counter+upgrade0+upgrade0_2+upgrade0_3;
	h1Id.textContent='Clicks doing:'+counter;
});







