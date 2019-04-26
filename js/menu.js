const $menu = document.querySelector('.-menu');
const $list = document.querySelector('.list');

$menu.addEventListener('click', () =>{
   $menu.classList.add('.-close')
   $list.classList.toggle('-active')
});

