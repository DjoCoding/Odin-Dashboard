import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING;

async function connect() {
    const connection = await mongoose.connect(connectionString);
    return connection;
}

export default { connect };