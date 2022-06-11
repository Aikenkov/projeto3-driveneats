function selectFood(elemento) {
    const opcaoSelecionada = document.querySelector('.food-options .selected');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selected');
    }

    elemento.classList.add('selected');
}

function selectDrink(elemento) {
    const opcaoSelecionada = document.querySelector('.drink-options .selected');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selected');
    }

    elemento.classList.add('selected');
}

let selectedDessert;

function selectDessert(elemento) {
    selectedDessert = elemento.innerHTML;
    const opcaoSelecionada = document.querySelector('.dessert-options .selected');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selected');
    }

    elemento.classList.add('selected');
}