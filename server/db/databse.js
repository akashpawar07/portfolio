import mongoose from "mongoose";

const db_connection = async () => {
    if (mongoose.connection.readyState >= 1) return; // Already connected

    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Database connected successfully ✅");
    } catch (err) {
        console.error("Something went wrong while connecting DB ❌: ", err);
        throw err;
    }
};

export default db_connection;