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
        tipoPago: ["Contraentregra", "Tarjeta de Crédito", "PSE"]
    }
})