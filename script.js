async function searchPokemon() {
    var pName = document.getElementById("name-input").value;

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
            document.getElementById('type-screen').innerHTML = data.types[0].type.name;
            document.getElementById('id-screen').innerHTML = data.id;
            document.getElementById('stats__weight').innerHTML = `weight: ${data.weight}`
            document.getElementById('stats__height').innerHTML = `height: ${data.height}`

        };

        console.log(data);

        document.getElementById('main-screen').style.backgroundImage = `url(${data.sprites.front_default})`;
        document.getElementById('name-screen').innerHTML = data.name;
        document.getElementById('type-screen').innerHTML = data.types[0].type.name;
        document.getElementById('id-screen').innerHTML = data.id;

        document.getElementById('move1').innerHTML = data.moves[0].move.name;
        document.getElementById('move2').innerHTML = data.moves[1].move.name;
        document.getElementById('move3').innerHTML = data.moves[2].move.name;
        document.getElementById('move4').innerHTML = data.moves[3].move.name;

        document.getElementById('stats__weight').innerHTML = `weight: ${data.weight}`
        document.getElementById('stats__height').innerHTML = `height: ${data.height}`


    }).catch(err => {
        alert('No pokemon found with this name!')
        console.log(err)
    });
};

async function nextPokemon() {
    var pName = document.getElementById("name-input").value;

    let evoPoke = `https://pokeapi.co/api/v2/pokemon-species/${pName}/`

    fetch(evoPoke)
        .then(res => res.json()

        ).then((data) => {
        let evolution = data.evolution_chain.url;
        console.log(evolution)

        fetch(evolution)
            .then(res => res.json()

            ).then((data) => {
            let evoPokemon = data.chain.evolves_to[0].species.url;

            fetch(evoPokemon).then(res => res.json()
            ).then((data) => {

                let newId = data.id;

                let pokedex = `https://pokeapi.co/api/v2/pokemon/${newId}/`;

                fetch(pokedex).then(res => res.json()
                ).then((data) => {

                    document.getElementById('main-screen').style.backgroundImage = `url(${data.sprites.front_default})`;
                    document.getElementById('name-screen').innerHTML = data.name;
                    document.getElementById('type-screen').innerHTML = data.types[0].type.name
                    document.getElementById('id-screen').innerHTML = data.id;

                    document.getElementById('move1').innerHTML = data.moves[0].move.name;
                    document.getElementById('move2').innerHTML = data.moves[1].move.name;
                    document.getElementById('move3').innerHTML = data.moves[2].move.name;
                    document.getElementById('move4').innerHTML = data.moves[3].move.name;

                }).catch(err => {
                    console.log(err)
                })

            }).catch(err => {
                console.log(err);
            });

        }).catch(err => {
            console.log(err);
        });

    }).catch(err => {
        alert('No pokemon found with this name!')
        console.log(err)
    });
}


