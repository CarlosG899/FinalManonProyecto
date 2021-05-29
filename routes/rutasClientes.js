const express = require('express')
const router = express.Router()

const clienteDB = require('../models/modeloClientes')

router.get('/inicio', (req, res) => {
  res.render('pages/inicio')
})

router.get('/nosotros', (req, res) => {
  res.render('pages/Nosotros')
})

router.get('/contacto', (req, res) => {
  res.render('pages/Contacto')
})

router.get('/pedidos', (req, res) => {
  res.render('pages/Pedidos')
})

router.get('/servicios', (req, res) => {
  res.render('pages/Servicios')
})

router.post('/add', (req, res) => {
  const newcliente = new clienteDB({
    name: req.body.Nom,
    lastname: req.body.Apellidos,
    services: req.body.Servicios,
    Location: req.body.Ubicacion,
    phone: req.body.Telefono
  })
  newcliente.save()
      res.render('pages/pedidos')
    })





// INSERT CLIENTE
// app.get('/add', function(req, res) {
//     res.render('pages/Resultados');
// });

// app.post('/new', function(req, res){
//   new Product({
//     Nombre : req.body.usuarios,
//     Apellidos  : req.body.Apellidos,
//     Servicios   : req.body.Servicios,
//     Ubicacion   : req.body.Ubicacion,
//     Telefono   : req.body.Telefono

//   }).save(function(err, prd){
//     if(err) res.json(err);
//     else    res.send("Usuario añadido");
//   });
// });

// update cliente

// delete cliente





module.exports = router