import app from "./app";
import { sequelize } from "./database/database.js";


const main = async () => {
    await sequelize.sync({force: false});
    app.listen(4000)
    // app.listen(app.get('port'), () => {    
    //     console.log('Server on port ', app.get('port'))
    // })
}

main()