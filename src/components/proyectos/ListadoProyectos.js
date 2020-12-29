import React, { useContext, useEffect } from 'react';
import Proyect from './proyect'
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectosGuardados } = proyectosContext;

    // if (proyectos.length === 0) return null;

    useEffect(() => {
        obtenerProyectosGuardados();
    }, []);

    return (
        <ul className="listado-proyectos">
            {proyectos.map(e => (
                <Proyect
                    key={e.id}
                    proyecto={e}
                />
            ))}
        </ul>
    );
};

export default ListadoProyectos;