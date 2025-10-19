import express from 'express'

import User from './models/user.js'

const app = express()

app.use(express.json())


app.get("/users", async (request, response) => {
 
});

app.post("/users", async (request, response) => {
  
})


connectDatabase()
    .then(() => {
        app.listen(3000, () => console.log("Servidor rodando e Bamco de dados conectados"))
    })
    .catch((error) => console.log(error))

