let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (listaDeAmigos.includes(nome)){
        alert(`O nome "${nome}" já foi adicionado!`);
        return;
    }
        listaDeAmigos.push(nome);
        atualizarLista();
        input.value = "";
}

function atualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    listaDeAmigos.forEach((amigo) => {  
        const item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (listaDeAmigos.length == 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    resultado.innerHTML = `<li> Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}