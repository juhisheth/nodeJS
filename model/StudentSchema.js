const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required.']
    },
    email:{
        type: String,
        unique: [true, 'This email address already exists.']
    },
    password:{
        type: String,
        required: [true, 'Password is required.']
    },
    age:{
        type: Number,
    },
    type:{
        type: Schema.Types.ObjectId,
        ref: 'StudentType'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('student', StudentSchema);