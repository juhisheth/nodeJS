const StudentExamBridgeSchema = require('../model/StudentExamBridgeSchema');

exports.addStudentExamBridge = (req, res)=>{
    const studentExamBridge = new StudentExamBridgeSchema(req.body)
    studentExamBridge.save((err, data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while creating the student exam bridge.",
                error: err.message
            })
        }
        else{
            res.status(201).json({
                message: "Student exam bridge created successfully.",
                data: data
            })
        }
    })
}