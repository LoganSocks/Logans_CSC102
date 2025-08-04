//<img id="MemeForCSC" src="MemeForCSC.png" alt="X-Men meme image">
            //Variable keeps track of current interval ID - we are storing this ID so that we can stop the image from moving

            let intervalID = 0;


            //Function for random number
            function getRandomNumber(){
                // Gets a number between 0 and 1 then times it by 700 and ronuds it up
                return Math.floor(Math.random() * 700);
            }
            //This funtion starts the image movement
            function startMove(){
                //shortcut to the meme image
                let imgMeme = document.getElementById("MemeForCSC");

                intervalID = setInterval(function(){
                    //Create variables for the new image location
                    let newTop = getRandomNumber();
                    let newLeft = getRandomNumber();
                    //Changnig the Images CSS properties
                    imgMeme.style.left = newLeft + "px";
                    imgMeme.style.top = newTop + "px";
                    console.log("left= " + newLeft +"px");
                    console.log("Top= " + newTop + "px");


                }, 1000); // 1000 is in miliseconds which equals 1 second
                document.getElementById("buttonStart").disabled = true;
                document.getElementById("buttonStop").disabled = false;
            }

            //Function to stop the image from moving
            function stopMove(){

                clearInterval(intervalID);

                document.getElementById("buttonStart").disabled = false;
                document.getElementById("buttonStop").disabled = true;
            }