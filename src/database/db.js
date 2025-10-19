import mongoose from 'mongoose'

 async function connectDatabase() {
    await mongoose.connect(
        'mongodb+srv://alineemille4_db_user:KaYRQHI0qtOFOhXE@cluster0.v9ihzth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
}

export default connectDatabase



