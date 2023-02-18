const express = require('express')
const app = express()

//Configuramos el motor de plantillas EJS
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('LAYOUTS CON NODE')
})

app.listen(3000, ()=> {
    console.log('Server UP en http://localhost:3000')
})