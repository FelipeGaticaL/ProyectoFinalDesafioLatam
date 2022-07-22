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


const deleteInfo = Swal.mixin({
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

const confirmacionDeleteInfo = Swal.mixin({
    title: '¿Todo ha sido eliminado con exito?',
    icon: 'success',
    confirmButtonText: 'OK',
    customClass: {
        confirmButton: 'btn btn-success mx-2',
    },
    buttonsStyling: false,
    reverseButtons: true
});

