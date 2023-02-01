const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentExamBridgeSchema = new Schema({
    student:{
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    exam:{
        type: Schema.Types.ObjectId,
        ref: 'exam'
    }
})

module.exports = StudentExamBridge = mongoose.model('studentexambridge', StudentExamBridgeSchema);