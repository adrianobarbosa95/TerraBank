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
  } else if (celular.length != 15) {
    alert('celular incorreto');
  } else if (!senha) {
    alert('senha vazia');
  } else if (confirmed_senha != senha) {
    alert('senhas diferentes');
  } else {
    const id = new Date().getTime();
    conta.push({ nome: nome, cpf: cpf, celular: celular, senha: senha, conta: id, saldo: 0.0 });
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

op.addEventListener('change', (event) =>
  event.target.value == 'saldo'
    ? (document.getElementById('valor').disabled = true)
    : (document.getElementById('valor').disabled = false)
);

confirmar.addEventListener('click', (event) => {
  event.preventDefault();

  const contaInformada = form2.conta.value.trim();
  const senha = form2.pass.value.trim();
  const vl = parseFloat(form2.valor.value.trim());
  const op = form2.op.value.trim();

  if (
    (contaachada = conta.find((el) => {
      return el.conta == parseInt(contaInformada);
    }))
  ) {
    if (contaachada.senha == senha) {
      if (op == 'saque') {
        sacar(contaachada, vl);
      }
      if (op == 'deposito') {
        depositar(contaachada, vl);
      }
      if (op == 'saldo') {
        consultar(contaachada);
      }
    } else {
      alert('senha não confere');
      return;
    }
  } else alert('Conta Inexistene!');
});

function depositar(conta, valor) {
  if (valor > 0) {
    conta.saldo += valor;
    alert(
      'Deposito de R$ ' +
        valor +
        ' realizado com sucesso na conta ' +
        conta.conta +
        ' de ' +
        conta.nome +
        ' o novo saldo é: R$ ' +
        conta.saldo
    );
  } else alert('O valor deve maior que R$ 0');
}
function sacar(conta, valor) {

  if(valor>0){

    if(conta.saldo>=valor){
      conta.saldo-=valor;
      alert('Saque de R$ '+valor+' realizado com sucesso! O novo saldo da conta ' + conta.conta + ' é: R$' + conta.saldo);}
    else alert('Não foi possivel reealizar o saque, a conta não possui saldo suficiente, o valor disponivel é: R$ '+conta.saldo);
  }
  else alert('O valor deve maior que R$ 0');
   
}

function consultar(conta) {
  alert('Presado(a) ' + conta.nome + ' o saldo da conta ' + conta.conta + ' é: R$ ' + conta.saldo);
}
