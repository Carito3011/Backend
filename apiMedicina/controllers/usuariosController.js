import Usuario from "../models/Usuario.js"

const agregar = async(req,res)=>{
    const {usuarioAcceso}=req.body;
    const existeUsuario=await Usuario.findOne({usuarioAcceso});
    if (existeUsuario){
        const error=new Error ("Usuario ya esta registrado en la base de datos.");
        return res.status(400).json({msg:error.message,ok:"NO"});
    }
   try{
    const usuario=new Usuario(req.body);
    const usuarioGuardado=await usuario.save();
    res.json({body:usuarioGuardado,ok:"SI"});
   } catch(error){
    console.log(error)
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