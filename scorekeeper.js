window.setTimeout(function() 
{
	var p1button = document.querySelector("#p1");
	var p2button = document.getElementById("p2");
	var resetButton = document.querySelector("#reset");
	var numInput=document.querySelector("input");
	var para=document.querySelector("p");
	var turn=document.querySelector("p span");
	var p1score=0;
	var p2score=0;
	var p1s=document.querySelector("#p1s");
	var p2s=document.querySelector("#p2s");
	var gameOver=false;
	var winningscore=5;
	var buttons=document.querySelectorAll("button");

	p1button.addEventListener("click",function() {
		
		if(p1score!=winningscore&&gameOver==false)
		   {
			    ++p1score;
			    p1s.textContent=p1score;
		   }
		
		else
			{   
				gameOver=true;		
			}	

		if(p1score==winningscore)
		    {p1s.classList.add("winner");}	
	       		
	});

	p2button.addEventListener("click",function() {
		 if(p2score!=winningscore&&gameOver==false)
		   {
			    ++p2score;
			    p2s.textContent=p2score;
		   }
		
		else
			{   
				gameOver=true;				
			}

		if(p2score==winningscore)		
			{p2s.classList.add("winner");}
	       		
	});


	resetButton.addEventListener("click",function() {
		resetagain();	       		
	});

	function resetagain() {
		p1score=0;
		p2score=0;
		gameOver=false;
		p1s.textContent=p1score;
		p2s.textContent=p2score;
		p1s.classList.remove("winner");
		p2s.classList.remove("winner");
	       		
	};

	numInput.addEventListener("change",function() {

		turn.textContent=this.value;
		winningscore=Number(this.value);
		resetagain();
		   		
	});

	for (var i = 0; i < buttons.length; ++i) 
	{
		buttons[i].addEventListener("mouseover",function() {
		   this.classList.add("selected");	
		});
		buttons[i].addEventListener("mouseout",function() {
		   this.classList.remove("selected");	
		});
	}


}, 500);