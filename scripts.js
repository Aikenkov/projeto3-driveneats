let selectedFood;
let selectedDessert;
let selectedDrink;

function selectFood(elemento) {
    selectedFood = elemento;
    const opcaoSelecionada = document.querySelector('.food-options .selected');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selected');
    }

    elemento.classList.add('selected');
    enableOrder()
}



function selectDrink(elemento) {
    selectedDrink = elemento;
    const opcaoSelecionada = document.querySelector('.drink-options .selected');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selected');
    }

    elemento.classList.add('selected');
    enableOrder()
}



function selectDessert(elemento) {
    selectedDessert = elemento;
    const opcaoSelecionada = document.querySelector('.dessert-options .selected');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selected');
    }

    elemento.classList.add('selected');
    enableOrder()
}

function enableOrder() {
    let desabilitado = document.querySelector('.disabled');
    let habilitado = document.querySelector('.able');
    if (selectedFood && selectedDrink && selectedDessert) {
        desabilitado.classList.add('hide');
        habilitado.classList.remove('hide');
    }
}