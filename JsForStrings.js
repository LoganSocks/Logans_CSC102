 //Create the function for form validation
        function validateForm(){
            //Grab first and last name and zip code that user put in
            // .Value helps keep things simple
            let firstName = document.getElementById("txtFirstName").value;
            let lastName = document.getElementById("txtLastName").value;
            let zipCode = document.getElementById("txtZip").value;
            //Use console log to make sure values are correct
            console.log("firstName=" + firstName);
            console.log("lastName=" + lastName);
            console.log("zipCode=" + zipCode);

            //Make variable for combined first and last name
            let fullName = firstName + " " + lastName;

            console.log(fullName)
            //create a shortcut to the div (message area)
            let divMessage = document.getElementById("divMessage");

            //Create an error f full name has eithern1 character or more than 20
            if (fullName.length == 1 || fullName.length > 20){
                divMessage.innerHTML = "Access Denied...Bad Full Name";
            }
            //Checking if zip code is exactly 5 characters if not give error
            else if (zipCode.length != 5){
                divMessage.innerHTML = "Access Denied...Bad Zip Code"

            }
            //if they made it through the first if and else if they get to the else
            else{
                divMessage.innerHTML = fullName + " Has Been Granted Access...Secret Phrase = It's Clobberin' Time!!"
            }


            return false;
        }