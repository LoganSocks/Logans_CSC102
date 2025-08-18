        // function to add an audio element to the page and show the pause and play buttons
        function addSound(){
            // shortcuts to our buttons
            let btnPlay = document.getElementById("btnPlay");
            let btnPause = document.getElementById("btnPause");
            // shortcut to add sound button
            let btnAddSound = document.getElementById("btnAddSound");
            // create an audio element
            let audWaves = document.createElement("audio");

            // give the audio element an id
            audWaves.setAttribute("id", "audWaves");

            // add the controls attribute so we can see the audio element on the page
           // audWaves.setAttribute("controls", "controls");

            // setup the source for the sudi file
            audWaves.setAttribute("src", "superhero-theme-7963.mp3")

            // add the audio element to the page
            document.body.appendChild(audWaves);

            // unhide play button
            btnPlay.hidden = false;
            // unhide pause button
            btnPause.hidden = false;
            // disable pause button
            btnPause.disabled = true;
            // hide btnAddSound
            btnAddSound.hidden = true;
        }

        // function to start playing the audio element
        function playSound(){
            // shortcut to audio element that we created
            let audio = document.getElementById("audWaves");

            // play the audio
            audio.play();

            manageButtons(true, false);
        }
        function pauseSound(){
            let audio = document.getElementById("audWaves");
            audio.pause();

            manageButtons(false, true);
        }

        // function to manage buttons
        function manageButtons(disablePlay, disablePause){

            let btnPlay = document.getElementById("btnPlay");
            let btnPause = document.getElementById("btnPause");
            // enable play buton
            btnPlay.disabled = disablePlay;

            // disable pause button
            btnPause.disabled = disablePause; 
        }