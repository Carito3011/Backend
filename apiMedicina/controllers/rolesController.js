import Rol from "../models/Rol.js"

const agregar = async(req,res)=>{
    //evitar roles duplicados por nombre 
    const {nombreRol}=req.body;
    const existeRol=await Rol.findOne({nombreRol});
    if (existeRol){
        const error=new Error ("Rol ya esta registrado en la base de datos.");
        return res.status(400).json({msg:error.message,ok:"NO"});
    }
    try {
        const rol=new Rol(req.body);
        const rolGuardado=await rol.save();
        res.json({body:rolGuardado,ok:"SI"})
    }catch(error){  
        console.log(error);
    }
}

const listar = async(req,res)=>{
    console.log("estoy en el metodo listar")
}
const eliminar = async(req,res)=>{
    console.log("estoy en el metodo eliminar");
}
const editar= async(req,res)=>{
    console.log("estoy en el metodo editar");
}
const listarUno = async(req,res)=>{
    console.log("estoy en el metodo listarUno");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}