import mongoose from "mongoose";
import colors from 'colors'

export const db = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(colors.green.bold(`Se conecto correctamente a la base de datos: ${url}`))
    } catch (error) {
        console.log(colors.red.bold(error))
        process.exit(1)
    }
}