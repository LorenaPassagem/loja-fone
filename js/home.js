let valorInicial = 10;
const $second = document.querySelector('.-second');

$second.addEventListener('click', handleClicka);

function handleClicka() {
  const $carrinho = document.querySelector(".-last"); 

  $carrinho.innerHTML =`Carrinho(${++valorInicial})`;
  
}


