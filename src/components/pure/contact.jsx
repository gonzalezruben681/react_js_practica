import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>Nombre: {contact.nombre}</h2>
            <h2>Apellido: {contact.apellido}</h2>
            <h5>Email: {contact.email}</h5>
            <h5>Conectado: {contact.conectado ? 'Contacto En Línea':'Contacto No Disponible' }</h5>
        </div>
    );
};


ContactComponent.propTypes = {
contact: PropTypes.instanceOf(Contact) 
};


export default ContactComponent;
