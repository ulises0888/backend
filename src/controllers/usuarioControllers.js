const usuarioModel = require('../models/usuarioModel')


class usuarioControllers {

    constructor() {
        Object.preventExtensions(this);
    }


    fetchUsers = async (req, resp) => {
      //  let data = await usuarioModel.fetchUsersAll();
        let data="fetchUsers funcionando al 100";
        resp.status(200).json(data);
    }


    createUsers = async (req, resp) => {
        // Lógica para crear usuarios
        //let record = await usuarioModel.createUsers(req.body);
        resp.status(200).json(record);
    }

    updateUsers = async (req, resp) => {
        /*try {
            // Lógica para actualizar usuarios
            let record = await usuarioModel.updateUsers(req.params.id_usuario, req.body);
            if (record) {
                resp.status(200).json({ message: 'Usuario actualizado', record });
            } else {
                resp.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            resp.status(500).json({ message: 'Error actualizando usuario', error: error.message });
        }*/
    };



    deleteUsers = async (req, resp) => {
        /*let deletedCount = await usuarioModel.deleteUser(req.params.id_usuario);

        resp.status(200).json({
            message: `User with ID ${req.params.id_usuario} deleted successfully`, deletedCount
        });*/
    }

    //Datos Libro
    fetchLibro = async (req, resp) => {
        //let data = await usuarioModel.fetchLibro();
        resp.status(200).json(data);
    }

    //Datos Editorial
    fetchEditorial = async (req, resp) => {
        //let data = await usuarioModel.fetchEditorial();
        resp.status(200).json(data);
    }
    createEditorial = async (req, resp) => {
        // Lógica para crear usuarios
        //let record = await usuarioModel.createeditorial(req.body);
        resp.status(200).json(record);
    }


     //Datos Autor
     fetchAutor = async (req, resp) => {
        //let data = await usuarioModel.fetchAutor();
        resp.status(200).json(data);
    }
    createAutor = async (req, resp) => {
        // Lógica para crear usuarios
        //let record = await usuarioModel.createAutor(req.body);
        resp.status(200).json(record);
    }

    //Datos Genero
    fetchGenero = async (req, resp) => {
        //let data = await usuarioModel.fetchGenero();
        resp.status(200).json(data);
    }
    createGenero = async (req, resp) => {
        // Lógica para crear usuarios
        //let record = await usuarioModel.createGenero(req.body);
        resp.status(200).json(record);
    }

}

module.exports = {
    usuarioControllers,
    usuarioModel
};
