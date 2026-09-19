const express = require('express');
const app = express();
const chamadoRoutes = require('./routes/chamadoRoutes')
const PORT = 3002;

app.get('/,')

app.use(express.json());

app.use('/chamados', chamadoRoutes);

app.listen(PORT, function(){
    console.log('servidor rodando na porta '+ PORT);
})