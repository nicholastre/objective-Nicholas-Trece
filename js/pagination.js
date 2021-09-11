function next() {
    page++;
    

    if(page > totalPages){
        page--;
    }

    console.log('pagina atual no next',page);
}

function prev() {
    page--;
    
    if(page < 1) {
        page++;
    }

    console.log('pagina atual no prev',page);
}

function goTo(number) {
    if(number < 1){
        number = 1;
    }
    
    page = number;

    if(number > totalPages){
        number = totalPages;
    }

    console.log('pagina atual no goTo',page);
}


function generatePagination(itemsPerPage, totalItems) {
    totalPages = Math.ceil(totalItems / itemsPerPage);
    let pagination = '';
    let buttonsToShow = 5;
    let buttonsLimitLeft = (page - Math.floor(buttonsToShow / 2));
    let buttonsLimitright = (page + Math.floor(buttonsToShow / 2));

    if (buttonsLimitLeft < 1) {
        buttonsLimitLeft = 1;
        buttonsLimitright = buttonsToShow;
    }
    
    if (buttonsLimitright > totalPages) {
        buttonsLimitLeft = totalPages - (buttonsToShow -1);
        buttonsLimitright = totalPages;
        
        if (buttonsLimitLeft < 1) {
            buttonsLimitLeft = 1;
        }
    }
    
    console.log('buttons',buttonsLimitLeft,buttonsLimitright );

    console.log(page);

    console.log(itemsPerPage, totalItems, totalPages);
    pagination = '<ul class="numbers">';

/*     for (let i = 1; i < totalPages; i++) {
        pagination += `<li class="numbers-item" onclick="getCharacters(${i})">${i}</li>`;
        //onclick="getCharacters(${i}),currentPage(${i});"
    } */

    for (let page = buttonsLimitLeft; page <= buttonsLimitright; page++) {
        console.log('dentro do for',page);
        pagination += `<li class="numbers-item" onclick="getCharacters(${page}), goTo(${page})">${page}</li>`;
        //onclick="getCharacters(${page}, goTo(${page},${totalPages})"
    }

    pagination += '</ul>';
    return pagination;
}
