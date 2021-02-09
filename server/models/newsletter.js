const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const NewsLetterSchema = new Schema({
    email:{
        type: String,
        unique: true
    }
})

module.exports= mongoose.model("Newsletter", NewsLetterSchema);