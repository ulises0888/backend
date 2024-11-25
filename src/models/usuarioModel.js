class usuarioModel {

    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }
    defineModel = async (orientDB) => {
        this.#orientDB = await orientDB;

    }

    //Datos del Usuario
    fetchUsersAll = async () => {
        let session = await this.#orientDB.pool.acquire();
        let data;
        //if(rid)
        data = await session.select().from('Usuario').all();
      
        session.close();
        return data;


    }


    createUsers = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'Usuario').set(object).one();
        return idRecord;
    }

    updateUsers = async (id_usuario, object) => {
        let session = await this.#orientDB.pool.acquire();
        try {
            // Realizamos la actualización del usuario con el campo id_usuario
            let result = await session.update('usuario')
                .set(object)
                .where({ 'id_usuario': id_usuario }) // Usamos id_usuario en lugar de @rid
                .return('AFTER')
                .one();

            return result;
        } catch (error) {
            throw new Error('Error actualizando el usuario');
        } finally {
            session.close(); // Cierra la sesión de OrientDB
        }
    };

    deleteUser = async(id_usuario)=>{
        
        let session = await this.#orientDB.pool.acquire();
        let deletedCount = await session.delete('Vertex', 'Usuario').where({ 'id_usuario': id_usuario }).one();
         return deletedCount; 
    
    };
    
    
    //Datos del Libro
    fetchLibro=async()=>{
        let session = await this.#orientDB.pool.acquire();
        let data;
        //if(rid)
        data = await session.select().from('libro').all();
      
        session.close();
        return data;
    }
    
    
    //Datos de la editorial
    fetchEditorial=async()=>{
        let session = await this.#orientDB.pool.acquire();
        let data;
        //if(rid)
        data = await session.select().from('editorial').all();
      
        session.close();
        return data;
    }
    createEditorial = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'editorial').set(object).one();
        return idRecord;
    }

     //Datos del Autor
     fetchAutor=async()=>{
        let session = await this.#orientDB.pool.acquire();
        let data;
        //if(rid)
        data = await session.select().from('autor').all();
      
        session.close();
        return data;
    }
    createAutor = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'autor').set(object).one();
        return idRecord;
    }

    //Datos del Genero
    fetchGenero=async()=>{
        let session = await this.#orientDB.pool.acquire();
        let data;
        //if(rid)
        data = await session.select().from('genero').all();
      
        session.close();
        return data;
    }
    createGenero = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'genero').set(object).one();
        return idRecord;
    }

}

module.exports = usuarioModel = new usuarioModel();
