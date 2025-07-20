
            function playGame(){
                console.log("Play Game function called");

            let die1 = rollDice()
            let die2 = rollDice()
            let die3 = rollDice()
            console.log("die1=" + die1)
            console.log("die2=" + die2)
            console.log("die3=" + die3)
            let sum = die1 + die2 + die3;
            console.log("sum=" + sum)


           
            
            //Creates a variable that holds a shortcut/nickname for the die rolls and result/sum

            let divDie1 = document.getElementById("divDie1");
            let divDie2 = document.getElementById("divDie2");
            let divDie3 = document.getElementById("divDie3");
            let divSum = document.getElementById("divSum");
            let divResult = document.getElementById("divResult");
                
            //Change the text in HTML elements
            divDie1.textContent = "Die 1 : " + die1;
            divDie2.textContent = "Die 2 : " + die2;
            divDie3.textContent = "Die 3: " + die3;
            divSum.textContent = "Sum is: " + sum;
            
            if (sum == 14 || sum == 8){
                divResult.textContent = "You Win!!"
           }else if (sum == 7 || sum == 9 || sum == 13 || sum == 15){
                divResult.textContent = "Oooooh, so close!"
           }else divResult.textContent = "You Lose!!"

            

            }

            function rollDice(){
                let randomNumber = Math.random() * 6;

                //round the number up to the next whole number
                randomNumber = Math.ceil(randomNumber)
                //return the random number generated
                return randomNumber
            }
            