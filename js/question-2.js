
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=bdad10662c054a13a8350f265cb5fcfe";

const containerResults = document.querySelector(".result");

async function getGames() {
    
    try {
        const response = await fetch(url);
    
        const results = await response.json();
    
        console.log(results);
    
        const games = results.results;
    
        containerResults.innerHTML = "";
    
        for(let i = 0; i < games.length; i++) {
    
            if (i === 8) {
                break;
            }
    
            containerResults.innerHTML += `<ul>
                                           <li><strong>Name:</strong> ${games[i].name}</li>
                                           <li><strong>Rating:</strong> ${games[i].rating}</li>
                                           <li><strong>Tags:</strong> ${games[i].tags.length}</li>
                                           </ul>`;
        }
    } catch (error) {
        console.log("Something unforseen happened");
        containerResults.innerHTML = errorFunction();
    }
    
}

getGames();