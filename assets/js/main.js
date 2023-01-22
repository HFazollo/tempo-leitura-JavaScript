const form = document.querySelector('#form');

// Cria parágrafo
function criaP() {
    const p = document.createElement('p');
    return p;
}

// Formação do resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    
    if(isValid == true) {
        p.classList.add('paragrafo-valido');
    } else {
        p.classList.add('paragrafo-invalido');
    }
}

// Captura evento de submit e exibe resultado
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputTexto = event.target.querySelector('#texto');
    const textoEspacado = inputTexto.value.split(' ');
    
    const texto = textoEspacado.filter(function(elemento) {
        return elemento.trim() != '';
    })

    const tam = texto.length;
    let tempo = tam / 220;

    if(!tam) { setResultado('Você precisa inserir um texto!', false); return; } 

    if(tempo <= 1) {
        tempo = Math.ceil(tempo);
        setResultado(`Aproximadamente ${tempo} minuto`, true);
    } else {
        tempo = Math.ceil(tempo);
        setResultado(`Aproximadamente ${tempo} minutos`, true);
    }
})
