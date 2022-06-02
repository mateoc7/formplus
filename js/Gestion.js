var app = new Vue({
    el: "#gestionOrder",
    data: {
        inputDesc: "",
        inputName: "" ,
        inputPriority: "",
        inputTel: "",
        inputTypePay: "",
        inputDir: "",
        inputCity: "",
        inputRef: "",
        order: [],
        prioridad: ["Seleccione una", "Alta", "Media", "Baja"],
        tipoPago: ["Seleccione uno", "Contraentregra", "Tarjeta de Crédito", "PSE"],
        ciudades: ["Seleccione una", "Armenia", "Bogotá", "Bucaramanga", "Barranquilla", "Bello", "Cúcuta", "Cali", "Cartagena", "Manizales", "Medellín", "Ocaña", "Pereira", "Santa Marta"]
    }
})