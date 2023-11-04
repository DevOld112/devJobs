import User from '../models/User.js '
import { generateJWT } from '../helpers/index.js'

const register = async(req, res) => {
    
    const { name, email, password } = req.body

    //Validar que los campos no esten vacios

    if(Object.values(req.body).includes('')){
        return res.status(400).json({
            msg:'Uno de los campos se encuentra Vacio, por favor llenar debidamente'
        })
    }



    //Validar que no exista un correo registrado anteriormente

    const registered = await User.findOne({email})
    
    if(registered){
        return res.status(400).json({
            msg: 'El usuario ya se encuentra registrado'
        })
    }


    try {
        const user = new User(req.body)
        const result = await user.save()
        
        return res.status(200).json({
            msg: 'Registro Realizado correctamente'
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            msg:'El registro no se completo debidamente'
        })
    }


    
}

const login = async(req, res) => {

    const { email, password } = req.body

    //Validar que no existan campos vacios

    if(Object.values(req.body).includes('')){
        return res.status(403).json({
            msg:'Existen Campos Vacios'
        })
    }

    //Validar que el usuario se encuentre registrado

    const user = await User.findOne({email})

    if(!user){
        return res.status(403).json({
            msg: 'Usuario NO se encuentra registrado'
        })
    }

    //Validar que se encuentre verificado

    if(!user.verified){
        return res.status(401).json({
            msg: 'Usuario no se encuentra confirmado'
        })
    }

    //Validar que la contraseña coincida 
    
    if(await user.checkPassword(password)){

        const token = generateJWT(user._id)
        return res.status(200).json({
            token: token,
            msg: 'Usuario Autenticado'
        })
    }else {
        return res.status(401).json({
            msg: 'Contraseña invalida'
        })
    }

}

export {
    register,
    login
}