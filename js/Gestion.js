var app = new Vue({
    el: "#gestionOrder",
    data: {
        inputDesc: "",
        inputName: "",
        inputPriority: "Seleccione una",
        inputTel: "",
        inputTypePay: "Seleccione uno",
        inputDir: "",
        inputCity: "Seleccione una",
        inputRef: "",
        order: [],
        prioridad: ["Seleccione una", "Alta", "Media", "Baja"],
        tipoPago: ["Seleccione uno", "Contraentregra", "Tarjeta de Crédito", "PSE"],
        ciudades: ["Seleccione una", "Armenia", "Bogotá", "Bucaramanga", "Barranquilla", "Bello", "Cúcuta", "Cali", "Cartagena", "Manizales", "Medellín", "Ocaña", "Pereira", "Santa Marta"]
    },
    methods: {
        validateFields: function () {
            if (this.inputDesc && this.inputName) {
                if (this.prioridad.indexOf(this.inputPriority) != 0) {
                    if (this.inputTel && this.tipoPago.indexOf(this.inputTypePay) != 0) {
                        if (this.inputDir && this.ciudades.indexOf(this.inputCity) != 0) {
                            this.clearFields();
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        clearFields: function() {
            this.inputDesc = "";
            this.inputName = "";
            this.inputPriority = "Seleccione una";
            this.inputTel = "";
            this.inputTypePay = "Seleccione uno";
            this.inputDir = "";
            this.inputCity = "Seleccione una";
            this.inputRef = "";
        }
    }
})