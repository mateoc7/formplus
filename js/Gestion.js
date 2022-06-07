var app = new Vue({
    el: "#gestionOrder",
    data: {
        flag: true,
        contador: 0,
        inputDesc: "",
        inputName: "",
        inputPriority: "Seleccione una",
        inputTel: "",
        inputTypePay: "Seleccione uno",
        inputDir: "",
        inputCity: "Seleccione una",
        inputRef: "",
        order: [
            {
                description: "Dos cervezas Club Colombia",
                name: "Juan Perez",
                priority: "Alta",
                tel: "11223344",
                typePay: "Efectivo",
                direction: "N/A",
                city: "Ocaña",
                ref: "N/A"
            },
            {
                description: "Tres barriles de pintura café Pintuco",
                name: "Lola Báez",
                priority: "Media",
                tel: "99999999",
                typePay: "PSE",
                direction: "Cra 21B #12-45",
                city: "Bogotá",
                ref: "Oficina"  
            }
        ],
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
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        clearFields: function () {
            this.inputDesc = "";
            this.inputName = "";
            this.inputPriority = "Seleccione una";
            this.inputTel = "";
            this.inputTypePay = "Seleccione uno";
            this.inputDir = "";
            this.inputCity = "Seleccione una";
            this.inputRef = "";
        },
        agregarOrden: function () {
            if (this.validateFields()) {
                this.order.push({
                    description: this.inputDesc,
                    name: this.inputName,
                    priority: this.inputPriority,
                    tel: this.inputTel,
                    typePay: this.inputTypePay,
                    direction: this.inputDir,
                    city: this.inputCity,
                    ref: this.inputRef
                });
                this.clearFields();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'La orden se registró con éxito',
                    showConfirmButton: false,
                    timer: 1500
                });
                // this.contador++;
                this.flag = true;
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Complete los campos',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        cancelarOrden: function (i) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.order.splice(i, 1);
                    Swal.fire(
                        '¡Eliminado!',
                        'La orden ha sido eliminada.',
                        'success'
                    )
                }
            });
        },
        seeInput: function() {
            this.flag = false;
        },
        btnCancelRegistro: function() {
            this.flag = true;
        }
    }
})