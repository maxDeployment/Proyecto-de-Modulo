import React, { Fragment, useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario que se encuentra en el initialState dentro del archivo ProyectoState
    //el useContext que estamos importando aqui (un nuevo hooks) nos permite consumir el proyectoContext y asignar su valor a una variable
    const proyectosContext = useContext(proyectoContext);
    const { 
        formulario,
        agregarProyecto,
        errorformulario,
        mostrarError,
        mostrarFormulario
    } = proyectosContext;

    //State del proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //destructury
    const { nombre } = proyecto;

    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el form
        setProyecto({
            nombre: ''
        })
    }

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >
                Crear Nuevo Proyecto
            </button>

            {
                formulario ? (
                    <form 
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block btn-confirmar-proyecto"
                    value="Confirmar"
                />
            </form>
                ) : null
            }
            { errorformulario ?
             <p className="mensaje error">El nombre del proyecto es obligatorio</p> :
              null}
            
        </Fragment>
    );
};

export default NuevoProyecto;