const validateEnrollment = (req,res,nexr)=>{
    const {student_name, course_id} =req.body
    if(!student_name || !course_id){
        return
        res.status(400).json({error:"student_name and course_id required"})
    }next()
    
}
module.exports = validateEnrollment