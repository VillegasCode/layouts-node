const express = require('express')
const app = express()

//Invocamos a express-ejs-layouts
const expressLayouts = require('express-ejs-layouts')

//Configuramos el motor de plantillas EJS
app.set('view engine','ejs')
app.use(express.static('public'))

//Usamos expressLayouts
app.use(expressLayouts)

app.get('/', (req, res)=>{
    res.render('inicio')
})

app.get('/contacto', (req, res)=>{
    res.render('contacto')
})

app.listen(3000, ()=> {
    console.log('Server UP en http://localhost:3000')
})