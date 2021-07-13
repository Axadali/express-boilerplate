import mongoose from 'mongoose';

const DbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(() => console.log("DB connected")).catch(err => console.log(err))
}

export {
    DbConnect
}