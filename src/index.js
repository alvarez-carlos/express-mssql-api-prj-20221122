import app from "./app";
// import './database/connection'

app.listen(app.get('port'), () => {
    console.log('Sersver on port ', app.get('port'))
})