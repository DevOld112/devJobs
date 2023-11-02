import User from '../models/User.js '

const register = async(req, res) => {
    
    const { name, email, password } = req.body

    //Validar que los campos no esten vacios

    if(Object.values(req.body).includes('')){
        return res.status(400).json({
            msg:'Uno de los campos se encuentra Vacio, por favor llenar debidamente'
        })
    }

    // Validar que el password sea seguro

    if(password.length < 8){
        return res.status(400).json({
            msg: 'Contraseña muy corta o insegura, por favor llenar el campo debidamente'
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

        const result = user.save()
        
        res.status(200).json({
            msg: 'Registro Realizado correctamente'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            msg:'El registro no se completo debidamente'
        })
    }


    
}

export {
    register
}