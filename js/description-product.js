/*
1 Ter a janela
2 Acessar o HTML
3 Pegar o coração
4 Pegar o clique no coração.
5 No momento do clique aparecerá um texto AE
*/


/*Parte que implementa interatividade com o coração */
 const $heart = document.querySelector (".-heart");

 $heart.addEventListener('click', clickHeart);

 function clickHeart(){ 
//    if( $heart.classList.contains("-active")) {    
//       $heart.classList.remove('-active');
//    }else{
//       $heart.classList.add('-active'); 
//   }
   $heart.classList.toggle("-active");
}

//Interação com as estrelas----------------------------
    const $star = document.querySelector(".star"); 

    $star.addEventListener('click', clickStar);    
   
    function clickStar(){
        $star.classList.toggle("-active");
        
    }