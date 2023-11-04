import jwt from 'jsonwebtoken'

const uniqueId = () => Date.now().toString(32) + Math.random().toString(32).substring(2)

const generateJWT = (id) => {
    const token = jwt.sign( { id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    return token
}


export {
    uniqueId,
    generateJWT
}