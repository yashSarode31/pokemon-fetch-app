async function fetchData() {
    
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resourse");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //Display name and type
        const nameDisplay = document.getElementById("pokemonDisplayName");
        const typeDisplay = document.getElementById("pokemonType");

        nameDisplay.textContent = data.name.toUpperCase();
        typeDisplay.textContent = `Type: ${data.types[0].type.name}`;

        document.getElementById("pokemonDetails").textContent =
        `Height: ${data.height} | Weight: ${data.weight} | XP: ${data.base_experience}`;


    
        document.getElementById("errorMsg").textContent = "";
    }
    catch(error){
        console.error(error);
        document.getElementById("errorMsg").textContent = "Pokémon not found!";
        document.getElementById("pokemonSprite").style.display = "none";
        document.getElementById("pokemonDisplayName").textContent = "";
        document.getElementById("pokemonType").textContent = "";
        document.getElementById("pokemonDetails").textContent = "";
    }

}