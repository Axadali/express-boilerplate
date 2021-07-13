import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Section', Schema);