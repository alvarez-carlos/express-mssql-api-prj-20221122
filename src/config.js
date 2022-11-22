import { config } from 'dotenv'

// intentar leer las variables de entonro definidas en el computador
config()

export default {
    PORT: process.env.PORT || 7000,
    DB_USER: process.env.DB_USER || '',
    DB_PWD: process.env.DB_PWD || '',
    DB_NAME: process.env.DB_NAME || '',
    SECRET_KEY: process.env.SECRET_KEY || '',
    SERVER: process.env.SERVER || '',
}