const desiredElement = document.getElementById('nav'); // elemento alvo
const expansor = document.getElementById('expansor'); // elemento alvo
const principal = document.getElementById('principal'); // elemento alvo
const pixelsAmount = '50'; // Quantidade de pixels a contar do TOP até definir a cor
const operacao = document.getElementById('operacao');
const cadastro = document.getElementById('cadastro');
const conta = [];
const enviar = document.getElementById('enviar');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const card = document.getElementById('card');
const card2 = document.getElementById('card2');
const confirmar = document.getElementById('confirmar');

window.addEventListener('scroll', function () {
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
  principal.style.display == 'block' ? (principal.style.display = 'none') : (principal.style.display = 'block');
  document.getElementById('expansor').classList.contains('mostrar')
    ? document.getElementById('expansor').classList.remove('mostrar')
    : document.getElementById('expansor').classList.add('mostrar');
});
enviar.addEventListener('click', (event) => {
  event.preventDefault();
  const nome = form.nome.value.trim();
  const celular = form.celular.value.trim();
  const cpf = form.cpf.value.trim();
  const confirmed_senha = form.confirmed_senha.value.trim();
  const senha = form.senha.value.trim();

  if (!nome) {
    alert('nome vazio');
  } else if (cpf.length != 14) {
    alert('cpf incorreto');
  } else if (celular.length != 11) {
    alert('celular incorreto');
  } else if (!senha) {
    alert('senha vazia');
  } else if (confirmed_senha != senha) {
    alert('senhas diferentes');
  } else {
    const id = new Date().getTime();
    conta.push({ nome: nome, cpf: cpf, celular: celular, senha: senha, conta: id, saldo: 0 });
    alert('Conta criada com sucesso! ' + id);
    form.reset();
  }
});

operacao.addEventListener('click', () => {
  card.style.display = 'none';
  card2.style.display = 'block';
});
cadastro.addEventListener('click', () => {
  card2.style.display = 'none';
  card.style.display = 'block';
});

op.addEventListener('change', (event) =>  event.target.value =='saldo'? 
document.getElementById('valor').disabled =true :
document.getElementById('valor').disabled = false

);

