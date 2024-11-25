const express = require('express')


class Router {
    #router;
    #usuarioControllers;

    constructor() {
        this.#router = express.Router();
        Object.preventExtensions(this);

    }

    attachControllers=async(ousuarioControllers)=>{
        this.#usuarioControllers=ousuarioControllers;
        this.#router.post('/usuarios')


    }

    prepareRouting=async()=>{
        this.#router.get('/usuarios', this.#usuarioControllers.fetchUsers);
        this.#router.post('/usuarios', this.#usuarioControllers.createUsers);
        this.#router.put('/usuarios/:id_usuario', this.#usuarioControllers.updateUsers);
        this.#router.delete('/usuarios/:id_usuario', this.#usuarioControllers.deleteUsers);
        this.#router.get('/libro', this.#usuarioControllers.fetchLibro);
        this.#router.get('/genero', this.#usuarioControllers.fetchGenero);
        this.#router.post('/genero', this.#usuarioControllers.createGenero);
        this.#router.get('/autor', this.#usuarioControllers.fetchAutor);
        this.#router.post('/autor', this.#usuarioControllers.createAutor);
        this.#router.get('/editorial', this.#usuarioControllers.fetchEditorial);
        this.#router.post('/editorial', this.#usuarioControllers.createEditorial);



    }

    

    getRouter = ()=>{
        return this.#router;
    }




}
//Module.exports = Router
module.exports = Router;
