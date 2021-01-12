import express from 'express';
import mongoose from 'mongoose';

import UsersMessage from './usersDB.js'

export const getUsers = async (req,res) =>{
    try{
        const userMessages = await UsersMessage.find();

        console.log(userMessages)
        res.status(200).json(userMessages)
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UsersMessage.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req,res) =>{
    const user = req.body;
    const newUser = new UsersMessage(user);

    try{
        await newUser.save();
        res.status(201).json(newUser)
    }catch (error) {
        res.status(504).json({message: error.message});
    }
}
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, phonenumber } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { firstname, lastname, email, phonenumber, _id: id };

    await UsersMessage.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await UsersMessage.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}
