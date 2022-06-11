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
        habilitado.innerHTML = `<a href='https://wa.me/5535997290977?text=${meuPedido}'>
        <h1>Fechar pedido</h1>
    </a>`;
    }
}

let strPedido = `Olá, gostaria de fazer o pedido: \n
 - Prato: Frango Yin Yang \n
 - Bebida: Coquinha Gelada \n
 - Sobremesa: Pudim \n
 Total: R$ 27.70`;
let meuPedido = encodeURIComponent(strPedido);
