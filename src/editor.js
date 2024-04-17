var editModal = document.getElementById('taskModal');
editModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var action = button.getAttribute('data-action');

    if (action === 'add') {
        // Configurar el formulario para agregar una nueva tarea
        var form = document.getElementById('editTaskForm');
        form.action = "/add_task";  // Ruta Flask para agregar la tarea
        document.getElementById('editTaskId').value = ''; // Limpiar el ID (si es necesario)
        document.getElementById('editNombre').value = '';
        document.getElementById('editDescripcion').value = '';
        document.getElementById('editCantidad').value = '';
    } else if (action === 'edit') {
        // Configurar el formulario para editar la tarea existente
        var id = button.getAttribute('data-id');
        var nombre = button.getAttribute('data-nombre');
        var descripcion = button.getAttribute('data-descripcion');
        var cantidad = button.getAttribute('data-cantidad');
        var form = document.getElementById('editTaskForm');
        form.action = "/edit_task/" + id;  // Ruta Flask para editar la tarea
        document.getElementById('editTaskId').value = id;
        document.getElementById('editNombre').value = nombre;
        document.getElementById('editDescripcion').value = descripcion;
        document.getElementById('editCantidad').value = cantidad;
    }
});
