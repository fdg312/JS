let container = document.querySelector('.container');
let bg = document.querySelector('.bg');

console.log('Hello')

container.addEventListener('click', function(){
    const confir = confirm('Вы уверены?')
    
    if(confir == true){
        container.classList.toggle('bg')
    }
    else{
        let a = 3
    }


    
})
