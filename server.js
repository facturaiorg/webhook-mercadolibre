const express = require('express');
const app = express();

app.use(express.json()); // para leer JSON en el cuerpo de la petición

// ruta para /webhook
app.post('/webhook', (req, res) => {
    console.log('Evento recibido de Mercado Libre:');
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send('OK');
});

// ruta para /callback
app.get('/callback', (req, res) => {
    const code = req.query.code;
    console.log('Código recibido:', code);
    res.send('Autorización recibida. Código: ' + code);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
