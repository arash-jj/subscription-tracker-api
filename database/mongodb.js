import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) throw new Error("check the db connection");

const connectTODatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connect to DB in ${NODE_ENV} mode`);
        
    } catch (error) {
        console.error('something went wrong');
        process.exit(1)
    }
}

export default connectTODatabase