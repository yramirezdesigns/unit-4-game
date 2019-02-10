function crystalGame (){
    var gemRandom = ["1", "2", "3", "4",]; //"5", "6", "7", "8", "9", "10", "11", "12"];
    var randomNum = [19-20];//120];
    var gemTotalAmount = 0;
    var wins = 0;
    var losses = 0;
    var winsElements = document.getElementById("winsNum");
    var lossesElements = document.getElementById("lostNum");
    var gemsElements = document.getElementById("gemTotalScore");
    var guessElements = document.getElementById("number-to-guess");
    var dimondElement = document.getElementById("diamondGem");
    var emeraldElements = document.getElementById("emeraldGem");
    var rubyElements = document.getElementById("rubyGem");
    var sappireElements = document.getElementById("sapphireGem");
    
    const WriteGemTotal = {
        lines: function() {return diamondGem += emeraldGem += rubyGem += sapphireGem}   
            gemsElements.addEventListener("click", function(e) {
                gemsElements.innerHTML = WriteGemTotal.lines();
                dimondElement[Math.floor(Math.random() * dimondElement.ength)];
                emeraldElements[Math.floor(Math.random() * emeraldElement.ength)];
                rubyElements[Math.floor(Math.random() * rubyElements.ength)];
                sappireElements[Math.floor(Math.random() * sappireElements.ength)];
            }
        //randomize number for gems.
        var imageButton = document.onclick= function(event){
            gemRandom[Math.floor(Math.random() * gemRandom.length)];
            for (var i = 0; i < gemRandom.length; i++);
            gemTotalAmount (dimondElement += emeraldElements += rubyElements += sappireElements);
            gemsElements.innerText=gemTotalScore;
            }
    }
    //to randomize randomNum (what the computer selects)
    Function randomComputerNum(){
        Var randomizeNum =document.getElementById(guessElements).innerHTML = Math.floor(Math.random() * 2) + 1;
        
    }
            if (gemRandom === randomNum){
                wins++;
                winsElements.innerText=wins;
                reset();
            }
            
            else if (gemRandom > randomNum){
                losses++;   
                lossesElements.innerText=losses;
                reset();
            }
            
            else {
                function reset (){
            
                }
                   
            }
        }  

            function renderRandomNumber (){
                guessElements.innerText=randomNumber;
        
            }

            function renderTotalAdded (){
                gemsElements.innerText=gemTotalScore;
        
            }


    

}