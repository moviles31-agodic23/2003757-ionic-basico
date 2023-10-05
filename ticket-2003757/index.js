
let listaTicket = document.getElementById("listaTicket");
let campoArticulo = document.getElementById("articulo");
let campoPrecio = document.getElementById("precio");
let total = 0;

function agregar() {
    const nuevoItem = document.createElement("li");
    nuevoItem.classList.add("agregarATicket");

    const articulo = document.createElement('p');
    const precio = document.createElement('p');

    const articuloInput = document.getElementById("articulo").value;
    const precioInput = parseFloat(document.getElementById("precio").value);

    articulo.innerText = articuloInput;
    precio.innerText = '$' + precioInput.toFixed(2);

    nuevoItem.append(articulo);
    nuevoItem.append(precio);

    listaTicket.append(nuevoItem);

    total += precioInput;
    limpiarCampos();
    mostrarTotal();
}

function mostrarTotal() {
    const totalElement = document.getElementById("total");
    totalElement.innerText = "TOTAL: $" + total.toFixed(2);
}

function limpiarCampos(){

    campoArticulo.value = "";
    campoPrecio.value = "";

}