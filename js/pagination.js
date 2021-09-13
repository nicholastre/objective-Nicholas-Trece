function next() {
    page++;
    

    if(page > totalPages){
        page--;
    }
}

function prev() {
    page--;
    
    if(page < 1) {
        page++;
    }
}

function goTo(number) {
    if(number < 1){
        number = 1;
    }
    
    page = number;

    if(number > totalPages){
        number = totalPages;
    }
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
    
    pagination = '<ul class="numbers">';

    for (let page = buttonsLimitLeft; page <= buttonsLimitright; page++) {
        pagination += `<li class="numbers-item" onclick="getCharacters(${page}), goTo(${page})">${page}</li>`;
    }

    pagination += '</ul>';
    return pagination;
}
