import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phonenumber: String
    
})

const UsersMessage = mongoose.model('UsersMessage', usersSchema);

export default UsersMessage;