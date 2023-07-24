function calcularSerie() {
    const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    const razon = parseInt(document.getElementById("razon").value);
    const cantidadTerminos = parseInt(document.getElementById("cantidadTerminos").value);

    let suma = numeroInicial;
    let resultados = "";

    for (let i = 1; i < cantidadTerminos; i++) {
        suma += razon;
        resultados += suma + "<br>";
    }

    document.getElementById("resultados").innerHTML = resultados;
    document.getElementById("total").innerHTML = "La sumatoria de la serie es: " + suma;
}