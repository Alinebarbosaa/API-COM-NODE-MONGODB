
import connectDatabase from '../models/user.js'

async function getUsers(){
       const user = await users.find()
    
        return response.status(200).json(users)

}

async function createUser(){
      const user = request.body

    const newUser = await User.create(user)

    return response.status(201).json(newUser);


}