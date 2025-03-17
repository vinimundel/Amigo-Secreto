//Lista com nomes dos participantes
const nomes = [];

//Cria função para adicionar nomes à lista
function add_nome() {
    const amigo = document.getElementById('amigo').value;
    //Percorre o nome completo e edita para os nomes próprios iniciem com letra maiúscula e as preposições não
    const amigo_editado = amigo.trim().toLowerCase().split(" ").map((palavra, index) => {
        const preposicoes = ["da", "de", "do", "das", "dos"];
        return preposicoes.includes(palavra) && index !== 0 ? palavra : palavra.charAt(0).toUpperCase() + palavra.slice(1);
    }).join(" ");
    // Verifica se o nome já está na lista
    if (nomes.includes(amigo_editado)) {
        alert("Este nome já está na lista!");
        return;
    } else if (amigo_editado === "") { 
        alert("Por favor, insira um nome válido!");
        return; // Sai da função se o nome for inválido
    };  
    // Adiciona o nome à lista
    nomes.push(amigo_editado);
    // Limpa o campo de entrada e atualiza a lista de participantes
    document.getElementById('amigo').value = '';
    att_lista();

}

//Função para atualizar a lista exibida
function att_lista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nomes.forEach((amigo) => {
        const item_Lista = document.createElement('li');
        item_Lista.textContent = amigo;
        lista.appendChild(item_Lista);
    });
}

//Função para sortear um nome da lista
function sortear() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois participantes!");
        return;
    }
    const sortead = nomes[Math.floor(Math.random()*nomes.length)];
    document.getElementById('resultado').textContent = 'Seu Amigo Secreto é:' + sortead;
}

function reset_sorteio() {
    // Limpa a lista de participantes após o sorteio
    nomes.length = 0;
    // Limpa o resultado e lista exibida na tela
    document.getElementById('resultado').innerHTML = '';
    att_lista();
}

// Selecionar o botão de adicionar amigo
const botaoAdicionar = document.querySelector(".button-add");

// Selecionar o botão de sortear amigo secreto
const botaoSortear = document.querySelector(".button-draw");

// Selecionar o botão de reiniciar
const botaoResetar = document.querySelector(".button-reset");

//Dá funcionalidade aos botões
botaoAdicionar.addEventListener("click", add_nome);
botaoSortear.addEventListener("click", sortear);
botaoResetar.addEventListener("click", reset_sorteio)