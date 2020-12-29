import React from 'react';

const Tarea = ({tarea}) => {
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado ? (<button className="completo" type="button">Completado</button>)
                : (<button className="incompleto" type="button">Incompleto</button>)}
            </div>

            <div className="acciones">
                <button
                type="button"
                className="btn btn-primario"
                >Editar</button>

                <button
                type="button"
                className="btn btn-secundario"
                >Eliminar</button>
            </div>
        </li>
    );
};

export default Tarea;