import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from container',
        service: 'hello-node',
        pod: process.env.POD_NAME || 'unknown',
        timestamp: new Date().toISOString()
    })
})

// ready and healthy endpoints for k8s
app.get('/readyz', (req, res) => {
    res.status(200).send('ready');
})
app.get('/healthyz', (req, res) => {
    res.status(200).send('ok');
})

// listen the port
app.listen(PORT, () => {
    console.log(`Example app running on the port ${PORT}!`);
})