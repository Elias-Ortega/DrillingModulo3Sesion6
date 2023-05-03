var btnAgregar = document.querySelector('#btnAgregar');
var btnBorrar = document.querySelector('#btnBorrar')
var parrafoNombres = document.querySelector('#nombres');
var arregloNombres = [];//creo un arreglo vacio para ir llenando



function agregarNombres() {
    btnAgregar.addEventListener('click', function () {
        var inputAgregar = document.querySelector('#txtNombreAgregado').value;//capturo valor del input
        arregloNombres.push(inputAgregar);//agregando elementos del input  al arreglo con push        
        parrafoNombres.textContent = arregloNombres + " , "; //para unir por comas los nombres
        document.querySelector('#txtNombreAgregado').value = ''; //limpio el input una vez presionado boton  

    });
}

function eliminarNombres() {
    btnBorrar.addEventListener('click', function () {
        var inputBorrarNombre = document.querySelector('#txtNombreBorrado').value;
        arregloNombres = arregloNombres.filter(alumno => alumno != inputBorrarNombre);
        parrafoNombres.textContent = arregloNombres.join(', ');//metodo join otra forma para unir elementos del arreglo
        document.querySelector('#txtNombreBorrado').value = ''; //limpio el input una vez presionado boton 
    });
    
}

agregarNombres();
eliminarNombres();



