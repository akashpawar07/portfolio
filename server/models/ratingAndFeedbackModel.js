import mongoose from 'mongoose'; // Change 1: require -> import

const ratingAndFeedbackSchema = new mongoose.Schema({
    name: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comment: {
        type: String
    },
}, { timestamps: true });

const ratingAndFeedbackModel = mongoose.model('RatingAndFeedback', ratingAndFeedbackSchema);
export default ratingAndFeedbackModel; 
