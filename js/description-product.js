/*
1 Ter a janela
2 Acessar o HTML
3 Pegar o coração
4 Pegar o clique no coração.
5 No momento do clique aparecerá um texto AE
*/

/*
const $heart = window.document.querySelector('.-heart');

$heart.addEventListener('click', handleClick);

function handleClick(){
    console.log('AAAAAAAAAAAAAAAAABBBBB');
}
*/

/* Implementa mudanção de numeroação no menu carrinho */
let valorInicial = 10;
const $carrinho = document.querySelector('.-second');
$carrinho.addEventListener('click', addCarrinho);

function addCarrinho(){
    const $camada = document.querySelector(".-last");    
    $camada.innerHTML =` Carrinho(${++valorInicial})`;
} 

/*Parte que implementa interatividade com o coração */
const $heart = document.querySelector('.-heart');

$heart.addEventListener("click", handleClick);

function handleClick() {
//if ($heart.classList.contains("-active")){
   // $heart.classList.remove("-active");
//}else{
  //  $heart.classList.add("-active");
   // }

   $heart.classList.toggle("-active");
}
