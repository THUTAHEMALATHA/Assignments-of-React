const express = require("express");

const router = express.Router()
const supabase = require("../supabaseClient")
const validateEnrollement = require("../middleware/validateEnrollement")

router.post("/enroll",validateEnrollement,
    async(req,res)=>{
        const (student_name,course_id)=req.body
        const {data,error} =await supabase
        .from("enrollments")
        .insert([{student_name,course_id}])

    });
    ro
    
router.get("/courses", async(req, res)=>{
    const {data,error} = await supabase
    .from("courses")
    .select("*")
    if(error) return
        res.status(500).json(error)
        res.json(data)
            
})