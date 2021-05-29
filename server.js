require('dotenv').config()
const express = require('express')
const app = express()
const rutasClientes = require('./routes/rutasClientes')
const mongoose = require('mongoose')
const path = require('path');
const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
app.use(rutasClientes)
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname + '/public')));




mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwkd0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connected!'))

// app.get('/Resultados', (req, res) => {
//     const sql = 'SELECT * FROM Resultados';

//     connection.query(sql, (error, results) => {
//         if (error) {
//             throw error;
//         }
//         res.render('pages/Resultados', {
//             'results': results
//         })
//     })
// });

app.listen(port, () => console.log('Server Started!'))