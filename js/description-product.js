/*
1 Ter a janela
2 Acessar o HTML
3 Pegar o coração
4 Pegar o clique no coração.
5 No momento do clique aparecerá um texto AE
*/


/*Parte que implementa interatividade com o coração */
 const $heart = document.querySelector (".-heart");

 $heart.addEventListener('click', handleClick);



//Interação com as estrelas----------------------------
    const $stars = document.querySelectorAll(".star"); 

    // $stars.forEach(function($star) {
    //     $star.addEventListener('click', handleClick);
    // });       
  

//------Functions----------------------------
    function handleClick(){              
        this.classList.toggle("-active");
     }