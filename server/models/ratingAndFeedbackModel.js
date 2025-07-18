const mongoose = require('mongoose')

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

const ratingAndFeedbackModel = mongoose.model('RatingAndFeedback', ratingAndFeedbackSchema)
module.exports = ratingAndFeedbackModel


