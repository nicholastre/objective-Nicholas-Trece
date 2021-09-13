
let page = 1;
let totalPages;

function createListeners() {
    document.querySelector('.first').addEventListener('click', () => {
        goTo(1);
        getCharacters(page);
    })

    document.querySelector('.last').addEventListener('click', () => {
        goTo(totalPages);
        getCharacters(page);
    })

    document.querySelector('.next').addEventListener('click', () => {
        next();
        getCharacters(page);
    })

    document.querySelector('.prev').addEventListener('click', () => {
        prev();
        getCharacters(page);
    })
}


async function getCharacters(offset = 20, name = '', limit = 20) {
    let timeStamp = '1631313202';
    let apiKey = '0158a0135bfb99e5458bf1217a655f11'
    let md5 = '660d7ab7d63da73f688ab45d3d037bab';
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=${limit}&offset=${offset}`;

    if (name != '') {
        url += `&name=${name}`;
    }

    let response = await fetch(url);
    let characters = await response.json();
    let htmlPagination = generatePagination(characters.data.limit, characters.data.total);
    let paginationNumbers = document.getElementById('pagination-numbers');
    let heroList = document.querySelector('.heros-listing');

    console.log(characters.data.results)

    heroList.innerHTML = renderCharacters(characters.data.results);
    paginationNumbers.innerHTML= '';
    paginationNumbers.innerHTML = htmlPagination;

    let itemNumber = document.querySelectorAll('.numbers-item');

        itemNumber.forEach(element => {
            if (page == element.innerHTML) {

                element.classList.add('is-active');
            } else{
                element.classList.remove('is-active');
            }
        });

    modal();
}   

getCharacters();
createListeners();
