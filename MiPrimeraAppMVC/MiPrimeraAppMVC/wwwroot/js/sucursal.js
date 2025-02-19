window.onload = function () {
    listarSucursales();
};
function filtrarSucursales() {
    let nombre = get("txtSucursales");
    if (nombre == "") {
        listarSucursales();
    } else {
        objSucursales.url = "Sucursal/filtrarSucursales/?nombre=" + nombre;
        pintar(objSucursales);
    }

}

let objSucursales;

async function listarSucursales() {
    objSucursales = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["id Sucursal", "Nombre", "Direccion"],
        propiedades: ["iidSucursal", "nombre", "direccion"],
        divContenedorTabla: "divContenedorTabla"
    }
    pintar(objSucursales);
}

function BuscarSucursales() {
    let forma = document.getElementById("frmBusqueda");

    let frm = new FormData(forma);

    fetchPost("Sucursal/filtrarSucursales", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    })
}

function LimpiarSucursales() {
    LimpiarDatos("frmBusqueda");
    listarSucursales();
}