const express = require("express");

const server = express();

// http://localhost:5000/hello?nome=Simas
// Query params = ?nome=Simas&idade=20
// ? = requisição e &= para adicionar mais paramentros

server.get("/hello", (req, res) => {
    const { nome, idade } = req.query;

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} meu amigo`,
        idade: idade
    });
});

// http://localhost:5000/hello/Simas
// Route params = hello/:nome

server.get("/hello/:nome", (req, res) => {
    const nome = req.params.nome;

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} tudo bem?`
    })
})

server.listen(5000); 