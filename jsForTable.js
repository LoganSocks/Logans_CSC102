//Array for superheros
            let arrSuper = [
                {name: "Spider-Man", power: "Web-Slinging", team: "Avengers"},
                {name: "Superman", power: "Super-Strength", team: "Justice League"},
                {name: "Iron Man", power: "Intelligence", team: "Avengers"},
                {name: "Flash", power: "Super-Speed", team: "Justice League"}
            ];

            // Shortcut to the table
            let tblSuper = document.getElementById("tblSuper");
            //loop through the array of objects--Arrays start at 0
            for (let i=0; i<arrSuper.length; i++){
                //build a table row
                let row = document.createElement("tr");
                //setup a td for each column of data
                let tdName = document.createElement("td");
                let tdPower = document.createElement("td");
                let tdTeam = document.createElement("td");
                //add data to each td
                tdName.textContent = arrSuper[i].name;
                tdPower.textContent = arrSuper[i].power;
                tdTeam.textContent = arrSuper[i].team;
                //add the columns to the row
                row.appendChild(tdName);
                row.appendChild(tdPower);
                row.appendChild(tdTeam);

            //append the new row with data to the table
                tblSuper.appendChild(row)

                

            }