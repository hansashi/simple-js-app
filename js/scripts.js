let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Bulbasur',
            type: ['grass', 'poison'],
            height: 0.7
        },
        {
            name: 'Wartortle',
            type: ['water'],
            height: 1
        },
        {
            name: 'Charmander',
            type: ['fire'],
            height: 0.6
        }
    ]
    function getAll() {
        return pokemonList;
    }

    function add(item) {
        return pokemonList.push({ name: item });
    }

    function addv(item) {
        if (typeof (item) !== 'object')
            return "Item is not an object!";
        else {
            function checkKeys(array) {
                if (array.includes("name") &&
                    array.includes("type") &&
                    array.includes("height")) {
                    return true;
                }
                else {
                    return false;
                }
            }

            if (checkKeys(Object.keys(item))) {
                return pokemonList.push(item);
            } else {
                return "Keys are not correct! name, type, height are required.";
            }
        }
    }

    function get(name) {
        return pokemonList.find((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());
        // or with filter() - but returns array
        // return pokemonList.filter(pokemon => pokemon.name.toLowerCase()=== name.toLowerCase());
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");

        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    return {
        getAll: getAll,
        add: add,
        addv: addv,
        get: get,
        addListItem: addListItem
    }
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});