const desiredElement = document.getElementById('nav'); // elemento alvo
const expansor = document.getElementById('expansor'); // elemento alvo
const principal = document.getElementById('principal'); // elemento alvo
const pixelsAmount = '50'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('changeStyle');
      this.document.getElementById('nomeLogo').style.color = '#144272';
      
      // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('changeStyle'); // remove classe "changeColor"
      this.document.getElementById('nomeLogo').style.color = '#fff';

    }
});

expansor.addEventListener('click', (event) => {
  principal.style.display == 'block' ? principal.style.display ='none' : principal.style.display ='block';
  document.getElementById('expansor').classList.contains('mostrar') ?
  document.getElementById('expansor').classList.remove('mostrar') :
  document.getElementById('expansor').classList.add('mostrar');
 
  });
