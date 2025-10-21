
import connectDatabase from '../models/user.js'

async function getUsers(){
       const user = await users.find()
    
        return response.status(200).json(users)

}

async function createUser(request, response){
      const user = request.body

    const newUser = await user.create(user)

    return response.status(201).json(newUser)
}

async function deleteUser(request, response) {
   const id = request.params.id

   await User.findByIdAndDelete( { _id: id})

  return response.status(200).json({ response: "userDeleted"})
  
}

export { getUsers, createUser, deleteUser}