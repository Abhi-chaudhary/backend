import express from "express";
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors';
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const __dirname=path.resolve();
const app=express();

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))
app.use('/',routes)
app.use(express.static('build'))
const PORT=process.env.PORT;

Connection()
app.listen(PORT,()=>console.log(`server is started on ${PORT}`))


