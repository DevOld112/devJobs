import User from '../models/User.js '

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

export {
    register
}