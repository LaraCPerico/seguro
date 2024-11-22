let currentMapIndex = 0;
const maps = ["map1", "map2", "map3"];

// Função para mostrar o mapa correspondente ao índice fornecido
function showMap(index) {
    maps.forEach((map, i) => {
        document.getElementById(map).style.display = i === index ? "block" : "none";
    });
}

// Função para exibir o mapa anterior
function showPreviousMap() {
    currentMapIndex = (currentMapIndex - 1 + maps.length) % maps.length;
    showMap(currentMapIndex);
}

// Função para exibir o próximo mapa
function showNextMap() {
    currentMapIndex = (currentMapIndex + 1) % maps.length;
    showMap(currentMapIndex);
}

// Mostra o primeiro mapa ao carregar a página
window.onload = function () {
    showMap(currentMapIndex);
};
