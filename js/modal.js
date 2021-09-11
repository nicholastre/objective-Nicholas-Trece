function modal(){
    const OpenModal = document.querySelectorAll('.hero-item');
    
    OpenModal.forEach(element => {
        element.addEventListener('click', () => {   
            if (element.querySelector('.is-active')){
                element.querySelector('.modal').classList.remove('is-active');
                element.querySelector('.modal').classList.add('is-disabled');
                
            } else{
                element.querySelector('.modal').classList.add('is-active');
                element.querySelector('.modal').classList.remove('is-disabled');
            }
        });
    });
}
