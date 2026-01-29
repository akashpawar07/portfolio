import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
        lowercase: true
    },
    userMessages: {
        type: String,
        lowercase: true
    }
}, { timestamps: true });

// Exporting the model as a default export for ESM
const contactModels = mongoose.model('AllContact', contactSchema);
export default contactModels;
