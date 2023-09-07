const form = document.getElementById('form-comparar');
const message = document.querySelector('.message')
let formValido = false;

function verificaValor(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = document.getElementById('campo-a');
    const valorCampoB = document.getElementById('campo-b');
    const mensagemSucesso = `Sucesso! O valor B (<b>${valorCampoB.value}</b>) é maior que o valor A (<b>${valorCampoA.value}</b>)`
    const mensagemErro = `Falhou! O valor B (<b>${valorCampoB.value}</b>) não é maior que o valor A (<b>${valorCampoA.value}</b>)`

    formValido = verificaValor(valorCampoA.value, valorCampoB.value)

    if (formValido) {
        message.innerHTML = mensagemSucesso;
        message.style.display = 'block';
        message.style.backgroundColor = 'green';
        message.style.color = 'white';   
    } else {
        message.innerHTML = mensagemErro;
        message.style.display = 'block'; 
        message.style.backgroundColor = 'red';
        message.style.color = 'white';
    }
})

/*
nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
        nomeBeneficiario.classList.remove('error');
    }
})*/