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
const conta = [];
const enviar = document.getElementById('enviar');
const form = document.getElementById('form');



enviar.addEventListener('click', (event)=>{
event.preventDefault();
const nome = form.nome.value.trim();
const celular = form.celular.value.trim();
const cpf = form.cpf.value.trim();
const confirmed_senha = form.confirmed_senha.value.trim();
const senha = form.senha.value.trim();
 
if(!nome){alert('nome vazio');}
else if(cpf.length != 14){alert('cpf incorreto');}
else if(celular.length != 11){alert('celular incorreto');}
else if(!senha){alert('senha vazia');}
else if(confirmed_senha != senha){alert('senhas diferentes');}
else{
  conta.push(
    { 'nome': nome, 'cpf': cpf, 'celular': celular, 'senha': senha, conta: new Date().getTime(), saldo: 0, }
  );
 alert('Conta criada com sucesso!');
}


}



);























