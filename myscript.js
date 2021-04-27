//First Sound Code Left Arrow
    
    document.addEventListener('keydown', function(beep) {
      if (beep.keyCode == 37) {  
          var beepsound = new Audio('https://www.soundjay.com/button/sounds/beep-25.mp3'); 
          beepsound.play();
          document.getElementById("left_arrow").innerHTML = "Beep On";
          document.getElementById("up_arrow").innerHTML = "Rapid Beep Off";
          document.getElementById("right_arrow").innerHTML = "Pen Scratch Off";    
	    } 
      else {
          var beepsound = new Audio('https://www.soundjay.com/button/sounds/beep-25.mp3');
          beepsound.pause();
      }
    }   
)
    
//Second Sound Code Right Arrow
    
    document.addEventListener('keydown', function(pen) {
       if (pen.keyCode == 38) {
		      var pensound = new Audio('https://www.soundjay.com/communication/sounds/writing-signature-3.mp3'); 
		      pensound.play(); 
          document.getElementById("left_arrow").innerHTML = "Beep Off";
          document.getElementById("up_arrow").innerHTML = "Rapid Beep Off";
          document.getElementById("right_arrow").innerHTML = "Pen Scratch On";        
      }  
      else {
          var pensound = new Audio('https://www.soundjay.com/communication/sounds/writing-signature-3.mp3');
          pensound.pause();
      }
    }
)
    
//Third Sound Code Up Arrow
    
    document.addEventListener('keydown', function(rapid) {
      if (rapid.keyCode == 39) {
		      var rapidsound = new Audio('https://www.soundjay.com/phone/sounds/telephone-ring-03a.mp3'); 
		      rapidsound.play(); 
          document.getElementById("left_arrow").innerHTML = "Beep Off";
          document.getElementById("up_arrow").innerHTML = "Rapid Beep On";
          document.getElementById("right_arrow").innerHTML = "Pen Scratch Off"; 
      }  
      else {
          var rapidsound = new Audio('https://www.soundjay.com/phone/sounds/telephone-ring-03a.mp3');
          rapidsound.pause();
      }
    }
)
