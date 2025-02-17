window.addEventListener('DOMContentLoaded', fetchCharacters); // változás

async function fetchCharacters() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');
        //console.log(response);
        const characters = await response.json();
        //console.log(characters);
        displayCharacters(characters);
    } catch (error) {
        console.error('Hiba történt az adatok lekérésekor:', error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById('character-container');
    container.innerHTML = '';

    characters.forEach(character => {
        //console.log(character);
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;

        const name = document.createElement('h2');
        name.textContent = character.name;

        const house = document.createElement('p');
        house.textContent = `Ház: ${character.house}`;

        const birthYear = document.createElement('p');
        birthYear.textContent = `Születési év: ${character.yearOfBirth}`;

        const actor = document.createElement('p');
        actor.textContent = `Színész: ${character.actor}`;

        card.append(image, name, house, birthYear, actor);
        container.append(card);
        //console.log(card);
    });
}