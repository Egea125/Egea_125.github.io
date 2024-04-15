document.getElementById("guardar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;

    // Crear una matriz de datos
    const data = [
        ["Nombre", "Edad"],
        [nombre, edad]
    ];

    // Crear un objeto Workbook de SheetJS
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Agregar la hoja de trabajo al libro de trabajo
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    // Generar un archivo XLSX
    XLSX.writeFile(wb, "datos.xlsx");
});
