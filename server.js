const express = require('express');
const app = express();

app.use(express.json()); // para leer JSON en el cuerpo de la petición

app.post('/webhook', (req, res) => {
    console.log('Evento recibido de Mercado Libre:');
    console.log(JSON.stringify(req.body, null, 2));

    // aquí puedes procesar el evento, guardar en base de datos, etc.

    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
