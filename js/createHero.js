function renderCharacters(heros) {
    let html = '';

    heros.forEach(element => {
        html += '<div class="hero-item">'; 
            html +=`
                <div class="hero-header">
                    <img class="header__photo" src="${element.thumbnail.path}.${element.thumbnail.extension}">
                    <h2>${element.name}</h2>
                </div>
            `;

            html += '<div class="hero__series">';
                element.series.items.forEach((series, index) => {
                    if (index <= 2) {
                        html +=`<p>${series.name}</p>`;
                    }
                });

            html += '</div>'; 

            html += '<div class="hero__events">';
            
                element.events.items.forEach((events, index) => {
                    if (index <= 2) {
                        html +=`<p>${events.name}</p>`;
                    }
                });

            html += '</div>'; 

            html += `
            <div class="modal">
                <div class="modal-content">
                    <h3>Detalhes</h3>
                    <div class="content__info">
                        <img class="info__photo" src="${element.thumbnail.path}/portrait_xlarge.${element.thumbnail.extension}">
            `;
                        html += '<div class="info__text">'; 

                            element.urls.forEach(details => {
                                if (details.type == 'detail'){
                                    html += `<a href="${details.url}">Detalhes</a>` 
                                } else {
                                    html += `<a href="${details.url}">${details.type}</a>` 
                                }
                            });

                        html += '</div>';

                        if (element.description != ''){
                            html += '<div class="info__description"><h4>Descrição</h4>';
                                
                                html +=`<p>${element.description}</p>`;
    
                            html += '</div>';
                        }
                        
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        html += '</div>'; 
    });

    return html;
}