const StudentSchema = require('../model/StudentSchema');

const addStudent = (req, res)=>{
    const student = new StudentSchema(req.body)
    student.save((err, data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while adding the data of the student.",
                error: err
            })
        }
        else
        {
            res.status(201).json({
                message: "Student data added successfully.",
                data: data
            })
        }
    })

}

// const getAllStudents = (req,res)=>{ 
//     StudentSchema.find((err,data)=>{
//         if(err)
//         {
//             res.status(500).json({
//                 message: "Some error occured while retrieving the data of the students.",
//                 error: err.message
//             })
//         }
//         else
//         {
//             res.status(200).json({
//                 message: "Student data retrieved successfully.",
//                 data: data
//             })
//         }
//     })
// }

//for joining and getting all info
const getAllStudents = (req,res)=>{
    StudentSchema.find().populate('type').exec((err, data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while retrieving the data of the students.",
                error: err.message
            })
        }
        else
        {
            res.status(200).json({
                message: "Student data retrieved successfully.",
                data: data
            })
        }
    })
}

const getStudentById = (req,res) =>{
    var id = req.params.id;
    StudentSchema.findById(req.params.id,(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while retrieving the student data.",
                error: err.message
            })
        }
        else
        {
            res.status(200).json({
                message: "Student data retrieved successfully.",
                data: data
            })
        }
    })
}

const deleteStudent = (req,res)=>{
    var id = req.params.id;
    StudentSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message: "Some error occured while deleting the student data.",
                error: err.message
            })
        }
        else
        {
            res.status(200).json({
                message: "Student data deleted successfully.",
                data: data
            })
        }
    })
}

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    deleteStudent
}