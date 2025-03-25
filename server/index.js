import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectToDb } from "./config/db.js";
import authRoutes from './routes/User.js'

dotenv.config();

//Database
connectToDb();


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log("Welcome");
});

//Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});