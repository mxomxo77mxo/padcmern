// imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//api routes
import usersRoutes from './routs.js'

//app config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//middlware
app.use(bodyParser.json( { limit:'30mb', extended: true }));
app.use(bodyParser.urlencoded( { limit:'30mb', extended: true }));
app.use
(cors());

app.use('/users', usersRoutes)

//db comnfig
mongoose.connect( process.env.CONNECTION_URL, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true 
    })
    .then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


