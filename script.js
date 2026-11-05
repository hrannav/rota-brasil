// Rola até a seção de regiões
function irParaRegioes() {

    document.getElementById("regioes").scrollIntoView({
        behavior: "smooth"
    });

}


// Filtra os pontos turísticos pela região
function filtrarRegiao(regiaoEscolhida) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const regiao = card.getAttribute("data-regiao");

        if (regiao === regiaoEscolhida) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Mostra todos os pontos turísticos
function mostrarTodos() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        card.style.display = "block";

    });

}


// Abre a localização do ponto turístico no Google Maps
function abrirMapa(local) {

    const endereco =
        encodeURIComponent(local);

    const url =
        "https://www.google.com/maps/search/?api=1&query="
        + endereco;

    window.open(url, "_blank");

}


// Pesquisa pelo nome do destino
function pesquisarDestino() {

    const pesquisa =
        document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const texto =
            card.innerText.toLowerCase();

        if (texto.includes(pesquisa)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
document.getElementById("formAvaliacao").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("resposta").innerHTML =
        "Obrigado pela sua opinião, " + nome + "! 🌎❤️";

    document.getElementById("formAvaliacao").reset();
});
