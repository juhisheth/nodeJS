const StudentTypeSchema = require('../model/StudentTypeSchema');

exports.addStudentType = (req,res)=>{
    const studentType = new StudentTypeSchema(req.body)
    studentType.save((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while adding the student type.",
                error: err.message
            })
        }
        else
        {
            res.status(201).json({
                message: "Student type added successfully.",
                data: data
            })
        }
    })
}