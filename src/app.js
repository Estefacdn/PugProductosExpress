const express = require ('express');
const app = express();
const port = 3200;

app.set('views','src/views');
app.set('view engine','pug');
app.use(express.static('src/public'));

app.get('/', (req, res)=>{
    res.render('index',
    {
        title: 'Suchicharron',
        products:[
            {imagen:'prod1.jpg', name:'Gyozas de Res', description:'Empanadillas rellenas de vegetales y carne de res', price:13000},
            {imagen:'prod2.jpg', name:'Croquetas de pollo y cilantro', description:'Croquetas de pollo y cilantro', price:13000},
            {imagen:'prod3.jpg', name:'Pastel de mariscos', description:'Combinación de camarones y calamares apanados en panko acompañado de salsa de tamarindo', price:15000},
            {imagen:'prod4.jpg', name:'Pollo Agridulce en Piña', description:'Pollo en tempura apanado bañado con salsa de piña', price:30000},
            {imagen:'prod5.jpg', name:'Pollo Cherry', description:'Corte de pechuga a la plancha relleno de una salsa a base de pimientos y especias', price:30000},
        ]
    });
})

app.listen(port, () =>{
    console.log(`Server in localhost:${port}`)
})