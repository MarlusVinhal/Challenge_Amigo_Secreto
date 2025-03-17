// Array para armazenar os amigos
let amigos = [];

// Captura os elementos do HTML
const inputNome = document.getElementById("nomeAmigo");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaAmigos = document.getElementById("listaAmigos");
const btnSortear = document.getElementById("btnSortear");
const btnReiniciar = document.getElementById("btnReiniciar");
const resultadoSorteio = document.getElementById("resultadoSorteio");

// Evento de clique para adicionar um amigo
btnAdicionar.addEventListener("click", adicionarAmigo);

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = inputNome.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido."); // Alerta caso o campo esteja vazio
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista na tela

    inputNome.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarLista() {
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome, index) => {
        let item = document.createElement("li");
        item.textContent = nome;

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = () => removerAmigo(index);

        item.appendChild(btnRemover);
        listaAmigos.appendChild(item);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove do array
    atualizarLista(); // Atualiza a lista na tela
}

// Evento de clique para sortear um amigo
btnSortear.addEventListener("click", sortearAmigo);

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    resultadoSorteio.innerHTML = `🎉 O amigo secreto é: <strong>${nomeSorteado}</strong>!`;
}

// Evento de clique para reiniciar
btnReiniciar.addEventListener("click", reiniciarSorteio);

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigos = []; // Esvazia o array
    atualizarLista(); // Atualiza a lista
    resultadoSorteio.innerHTML = ""; // Limpa o resultado
}
