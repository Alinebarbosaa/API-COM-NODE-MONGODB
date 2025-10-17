import express from 'express'
import mongoose from 'mongoose'

import User from './models/user.js'

const app = express();
app.use(express.json());


app.get("/users",  async (request, response) => {
    const users = await User.find

    return response.status(200).json(users)
});

app.post("/users", async (request, response) => {
    const user = request.body
    
    const newUser = await User.create(user)

    return response.status(201).json(newUser);
});

mongoose.connect("mongodb+srv://alineemille4_db_user:KaYRQHI0qtOFOhXE@cluster0.v9ihzth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Banco de dados conectado "))
    .catch(() => console.log("Deu RUIM"))

app.listen(3000);