const deleteAlert = Swal.mixin({
    title: '¿Estás seguro de realizar está acción?',
    text: "¡No podrás revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
    customClass: {
        confirmButton: 'btn btn-danger mx-2',
        cancelButton: 'btn btn-secondary mx-2'
    },
    buttonsStyling: false,
    reverseButtons: true
});

const carga = Swal.mixin({
    title: 'Carga de Información',
    text: "Todo OK",
    icon: 'success',
    showCancelButton: true,
    cancelButtonText: 'Close',
    customClass: {
        confirmButton: 'btn btn-danger mx-2',
        cancelButton: 'btn btn-secondary mx-2'
    },
    buttonsStyling: false,
    reverseButtons: true
});