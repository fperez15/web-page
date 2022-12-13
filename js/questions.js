(function() {
    const titleQuestions = [...document.querySelectorAll('.questions__title')]; //con el array se obtienen todos los elementos de la clase .questions__title
    
    titleQuestions.forEach(questions => {  
        questions.addEventListener('click' , 
        ()=> {
           let height = 0; // se calcula el alto del elemento
           let answer = questions.nextElementSibling; // se obtiene el hermano de .questions__title que es .questions__show
           let addPadding = questions.parentElement.parentElement; // se obtiene el padre de la clase .questions__title que es .questions anwser y a su vez el padre de esta clase q es questions__padding, la cual es la clase q necesitamos (.questions__padding).
           
           addPadding.classList.toggle('questions__padding--add'); // se obtienen las clases de addPadding 
           questions.children[0].classList.toggle('questions__arrow--rotate');  // hace rotar la flecha... .toggle() permite alternar la visibilidad de un elemento.


           if (answer.clientHeight === 0) {
            height = answer.scrollHeight; // alto minimo para q un elemento se me muestre
           }
           answer.style.height = `${height}px`;
        })

    })  //de todas las preguntas se obtienen las preguntas individualmente



})();



