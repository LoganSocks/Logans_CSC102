//Function to handle user input
        function checkPalindrome(event){
            //prevent form from submitting
            event.preventDefault();

            //shortcut to txtWord user input
            let userInput = document.getElementById("txtWord").value;

            //shortcut to the div output
            let divPalinResults = document.getElementById("divPalinResults");
            
            //create variable to hold if the word is a palindrome or not
            let isPalin = isPalindrome(userInput);

            //This is equivalent to isPalin == true
            if(isPalin){
                divPalinResults.textContent = userInput + " is a palindrome!";

            }
            else{
                divPalinResults.textContent = userInput + " is not a palindrome!"
            }

        }
        function isPalindrome(stringToTest){
            //Variable to hold string to be reversed
            let stringToReverse = stringToTest.toLowerCase();
            //Convert the string to an array where each letter has its own spot
            //Reverse the contents of the array
            //Then rejoin the array back into a string
            stringToReverse = stringToReverse.split("").reverse().join("");
            if (stringToTest == stringToReverse){
            return true;
            
            }
            //default to false
            return false;
        }
        //console.log("radar=" + isPalindrome("radar"));
        //console.log("test=" + isPalindrome("radar"));
        //console.log("Mom=" + isPalindrome("mom"))

