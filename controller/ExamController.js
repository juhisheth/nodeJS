const ExamSchema = require('../model/ExamSchema');

exports.addExam = (req, res)=>{
    const exam = new ExamSchema(req.body)
    exam.save((err, data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while creating this exam.",
                error: err.message
            })
        }
        else
        {
            res.status(201).json({
                message: "Exam created successfully.",
                data: data
            })
        }
    })
}