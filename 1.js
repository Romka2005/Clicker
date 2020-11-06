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
var counter=0;
var upgrade0=1;
var upgrade0_2=0;
upgradebutton.addEventListener('click', function(){
	if(counter>=10){
		counter=counter-10;
		upgrade0++;
		h1Id.textContent='Clicks doing:'+counter;
	}
});
upgrade2button.addEventListener('click', function(){
	if(counter>=100){
		counter=counter-100;
		upgrade0_2=upgrade0_2+11;
		h1Id.textContent='Clicks doing:'+counter;
	}
});
buttonId.addEventListener('click', function(){
	counter=counter+upgrade0+upgrade0_2;
	h1Id.textContent='Clicks doing:'+counter;
});



