(function() {
    const titleQuestions = [...document.querySelectorAll('.questions__title')]; //con el array se obtienen todos los elementos de la clase .questions__title
    
    titleQuestions.forEach(questions => {  
        questions.addEventListener('click' , 
        ()=> {
           let height = 0; // se calcula el alto del elemento
           let answer = questions.nextElementSibling; // se obtiene el hermano de .questions__title que es .questions__show

           if (answer.clientHeight === 0) {
            height = answer.scrollHeight; // alto minimo para q un elemento se me muestre
           }
           answer.style.height = `${height}px`;
        })

    })  //de todas las preguntas se obtienen las preguntas individualmente



})();



