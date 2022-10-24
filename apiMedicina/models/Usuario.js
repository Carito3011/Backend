import mongoose from "mongoose";

const usuarioSchema=mongoose.Schema({
    idRol:{
        type:mongoose.Schema.Types.ObjectId,
        
    }
    },{
        timestamps: true
    });

    const Usuario=mongoose.model("Usuario",usuarioSchema);
    export default Usuario;