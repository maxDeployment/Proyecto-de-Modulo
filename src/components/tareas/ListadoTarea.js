import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTarea = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    if (!proyecto) return (
        <div>
            <h2>Selecciona uno de tus Proyeto</h2>
        </div>
    )

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: 'Análisis', estado: true},
        {nombre: 'Estimación', estado: true},
        {nombre: 'Interfaz y Diseño', estado: false},
        {nombre: 'Funcionalidades', estado: false},
        {nombre: 'Testing', estado: false},
        {nombre: 'Despliegue', estado: false}
    ]

    //Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasProyecto.map(e => (
                    <Tarea
                        tarea={e}
                    />
                ))
                }
            </ul>

            <button
            type="button"
            className="btn btn-eliminar"
            onClick={onClickEliminar}
            >Eliminar Proyecto</button>
        </Fragment>
    );
};

export default ListadoTarea;