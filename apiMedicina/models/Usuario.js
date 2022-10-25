import mongoose from "mongoose";

const usuarioSchema=mongoose.Schema({
    idRol:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rol",
        require : true,
        trim : true
        
    },
    idEspecialidad:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Especialidad",
        require : true,
        trim : true
        
    },
    nombresUsuario:{
        type:String,
        require : true,
        trim : true
        
    },
    celularUsuario:{
        type:Number,
        require : true,
        trim : true
        
    },
    correoUsuario:{
        type:String,
        require : true,
        trim : true
        
    },
    direccionUsuario:{
        type:String,
        require : true,
        trim : true
        
    },
    usuarioAcceso:{
        type:String,
        require : true,
        trim : true
        
    },
    claveAccesso:{
        type:String,
        require : true,
        trim : true
        
    },
    estadoUsuario:{
        type:Number,
        require : true,
        trim : true
        
    }
    },{
        timestamps: true
    });

    const Usuario=mongoose.model("Usuario",usuarioSchema);
    export default Usuario;