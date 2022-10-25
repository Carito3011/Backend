import mongoose from "mongoose";

const AgendaCitaSchema=mongoose.Schema({
    idMedico:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        require : true,
        trim : true
        
    },
    
    fechaCita:{
        type:Date,
        require : true,
        trim : true
        
    },
    horaCita:{
        type:Date,
        require : true,
        trim : true
        
    },
    numeroConsultorio:{
        type:String,
        require : true,
        trim : true
        
    },
    estadoCita:{
        type:Number,
        require : true,
        trim : true
        
    }
    
    },{
        timestamps: true
    });

    const AgendaCita=mongoose.model("AgendaCita",AgendaCitaSchema);
    export default AgendaCita;