let search = document.querySelector('#search');
let form = document.querySelector('#form');

form.addEventListener('submit', function() {
    event.preventDefault();
    searchName = search.value;
    getCharacters(0,searchName);
    let heroCards = document.querySelectorAll('.hero-item');

    heroCards.forEach(element => {
        let cardName = element.querySelector('h2').textContent;

        if (cardName !=searchName){
            element.classList.add('is-disabled');
        } else {
            element.classList.remove('is-disabled');
        }
    });
});