async function searchPokemon() {
    let pName = document.getElementById("name-input").value;

    let pokedex = `https://pokeapi.co/api/v2/pokemon/${pName}/`;
    fetch(pokedex)
        .then(res => res.json()

        ).then((data) => {

        let pokemon = pName.toLowerCase();

        if (pokemon === 'ditto') {
            document.getElementById('move1').innerHTML = data.moves[0].move.name;
            document.getElementById('move2').innerHTML = " ";
            document.getElementById('move3').innerHTML = " ";
            document.getElementById('move4').innerHTML = " ";

            document.getElementById('main-screen').style.backgroundImage = `url(${data.sprites.front_default})`;
            document.getElementById('name-screen').innerHTML = data.name;
            document.getElementById('type-screen').innerHTML = data.types[0].type.name
            document.getElementById('id-screen').innerHTML = data.id;
            return
        };

        console.log(data);

        document.getElementById('main-screen').style.backgroundImage = `url(${data.sprites.front_default})`;
        document.getElementById('name-screen').innerHTML = data.name;
        document.getElementById('type-screen').innerHTML = data.types[0].type.name
        document.getElementById('id-screen').innerHTML = data.id;

        document.getElementById('move1').innerHTML = data.moves[0].move.name;
        document.getElementById('move2').innerHTML = data.moves[1].move.name;
        document.getElementById('move3').innerHTML = data.moves[2].move.name;
        document.getElementById('move4').innerHTML = data.moves[3].move.name;

    }).catch(err => {
        alert('No pokemon found with this name!')
        console.log(err)
    })
}


