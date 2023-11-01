import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import { db } from './config/db.js'
import index from './routes/index.js'
import vacancyRoutes from './routes/vacancyRoutes.js'
import cors from 'cors'




// 1) Variable Global

const app = express()

// 2) Leer los datos via Body

app.use(express.json())

// 3) Variables de Entorno

dotenv.config()

// 4) Conectar a la base de Datos

db()

// 5) Configuracion de CORS

const whiteList = [process.env.FRONTEND_URL, undefined]

const corsOption = {
    origin: function(origin, callback) {
        if(whiteList.includes(origin)){
            callback(null, true)
            console.log(colors.green.bold('Conexion Establecida Correctamente con el frontend'))
        } else {
            callback(new Error('No permite la conexion con CORS'))
        }
    }
}

app.use(cors(corsOption))

// 6) Rutas Generales

app.use('/index', index)
app.use('/employ', vacancyRoutes)



// Levantando el servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(colors.green.bold(`Servidor Levantado en el puerto ${PORT}`))
})