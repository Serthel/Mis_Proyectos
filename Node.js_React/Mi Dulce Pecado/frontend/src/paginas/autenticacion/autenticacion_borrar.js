import axios from 'axios';
import Swal from 'sweetalert2';
//import {useNavigate} from 'react-router'
function Autenticacion_Borrar(id)
{    
    //const navegar = useNavigate()

    function autenticacionRefrescar()
    {
        //navegar('/')
        window.location.href="/autenticacion_listar";
    }

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({title: '¿Realmente desea eliminar este registro?',
        text: "No es posible revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: false
        }).then((result) => {
        if (result.isConfirmed) {

    //********************************************************************************
    //Codigo para enviar peticion con autenticación
    //********************************************************************************
    const token = localStorage.getItem("token");
    let bearer;
    if(token===""){bearer="";}else{bearer=`${token}`;}
    const config={headers:{'Content-Type': 'application/json','x-auth-token': bearer}}
    //********************************************************************************
  
        
        axios.delete(`/api/autenticacion/borrar/${id}`,config)
        .then(() => this.setState({ status: 'Borrado Exitoso' }));
        
        autenticacionRefrescar()

        swalWithBootstrapButtons.fire(
            '¡Operación Exitosa!',
            'El registro ha sido eliminado exitosamente',
            'success'
        )


    } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            '¡ERROR!',
            'El registro no pudo ser eliminado',
            'error'
            )
        }
    })
    
}

export default Autenticacion_Borrar;