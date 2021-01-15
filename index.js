const express = require('express');
const RefreshingController = require('./Controllers/RefreshingController.js')
var server = express();

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

server.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

server.use('/api/refreshing', RefreshingController.router);

//Default Error Handler
server.use((error, req, res, next) => {
    res.status(error.status || 400).send({ error: { message: error.message } })
});

//Catch all error handler
server.use('*', (req, res, next) => {
    res.status(404).send({
        error: 'No matching routes'
    })
});