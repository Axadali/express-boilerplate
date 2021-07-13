import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    section: {
        type: Schema.Types.ObjectId,
        ref: "Section",
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Class', Schema);