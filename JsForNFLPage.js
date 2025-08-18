 //Function to add the stats to the divs and validate the input
 function updateTeamStats(event){
            event.preventDefault();
            //create a class and it's properties
            class NflTeam{
            constructor(name, wins, losses, ties,  superbowls, winPercent){
                this.name = name;
                this.wins = wins;
                this.losses = losses;
                this.ties = ties;
                this.superbowls = superbowls;
                this.winPercent = winPercent;

            }

            }
            //Create an array of classes
            let teams = [ 
                new NflTeam("Commanders", 641, 648, 29, 3, ".497%"),
                new NflTeam("Eagles", 638, 639, 27, 2, ".500%"),
                new NflTeam("Giants", 724, 663, 34, 4, ".521%"),
                new NflTeam("Cowboys", 569, 423, 6, 5, ".573%"),
                new NflTeam("Steelers", 681, 585, 22, 6, ".537%"),
                new NflTeam("Ravens", 268, 199, 1, 2, ".574%"),
                new NflTeam("Browns", 562, 548, 14, 0, ".486%"),
                new NflTeam("Bengals", 403, 479, 5, 0, ".457%"),
                new NflTeam("Jets", 433, 559, 8, 1, ".437%"),
                new NflTeam("Patriots", 545, 446, 9, 6, ".550%"),
                new NflTeam("Bills", 486, 505, 8, 0,  ".490%"),
                new NflTeam("Dolphins", 504, 408, 4, 2, ".552%"),
                new NflTeam("Bears", 798, 646, 42, 1, ".551%"),
                new NflTeam("Vikings", 537, 438, 11, 0, ".550%"),
                new NflTeam("Packers", 810, 604, 38, 4, ".572%"),
                new NflTeam("Lions", 606, 709, 34, 0, ".462%"),
                new NflTeam("Raiders", 509, 480, 11, 3, ".503%"),
                new NflTeam("Chiefs", 547, 441, 12, 4, ".548%"),
                new NflTeam("Broncos", 518, 472, 10, 3, ".523%"),
                new NflTeam("Chargers", 495, 494, 11, 0, "502%"),
                new NflTeam("49ers", 630, 526, 16, 5, ".536%"),
                new NflTeam("Seahawks", 402, 373, 1, 1, ".519%"),
                new NflTeam("Rams", 624, 606, 21, 2, ".502%"),
                new NflTeam("Cardinals", 593, 812, 41, 0, ".424%"),
                new NflTeam("Falcons", 398, 512, 6, 0, ".438%"),
                new NflTeam("Panthers", 219, 264, 1, 0, ".454%"),
                new NflTeam("Buccaneers", 318, 457, 1, 2, ".410%"),
                new NflTeam("Saints", 417, 480, 5, 1, ".465%"),
                new NflTeam("Texans", 162, 209, 1, 0, ".437%"),
                new NflTeam("Colts", 564, 510, 8, 2, ".526%"),
                new NflTeam("Jaguars", 202, 282, 0, 0, ".417%"),
                new NflTeam("Titans", 479, 515, 6, 0, ".488%"),
        ];
            
             
            // Creating shortcut to the div
            let teamName = document.getElementById("teamName");
            let teamWins = document.getElementById("teamWins");
            let teamLosses = document.getElementById("teamLosses");
            let teamTies = document.getElementById("teamTies");
            let superbowlWins = document.getElementById("superbowlWins");
            let winPercent = document.getElementById("winPercent");
            let userTeam = document.getElementById("userTeam").value;
            let notATeam = document.getElementById("notATeam");

            console.log("Team name is " + userTeam);
            //Verify user input and create a variable for verified user input
            //Access the array and then a class property inside of the array
            let teamPicked = teams.find(T => T.name == userTeam)
            //Update the div contents with the correct teams stats
            if (teamPicked){
            teamName.textContent = ("Team Name = " + teamPicked.name);
            teamWins.textContent = ("Total Wins = " + teamPicked.wins);
            teamLosses.textContent = ("Total Losses = " + teamPicked.losses);
            teamTies.textContent = ("Total Ties = " + teamPicked.ties);
            superbowlWins.textContent = ("Total Rings = " + teamPicked.superbowls);
            winPercent.textContent = ("Win Percent = " + teamPicked.winPercent);
            notATeam.textContent = ("Nice Team !")
            }
            //Update the div if input was invalid
            else{
                    teamName.textContent = ("");
                    teamWins.textContent = ("");
                    teamLosses.textContent = ("");
                    teamTies.textContent = ("");
                    superbowlWins.textContent = ("");
                    winPercent.textContent = ("");
                    notATeam.textContent = ("The Name You Entered Is Incorrect. Remember To Capitalize The Teams First Letter.")

            }
            


            }

           