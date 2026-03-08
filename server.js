const express = require('express');

const supabase = require('./supabaseClient')

const app = express();
app.use(express.json());

// app.get('/courses', async(req, res)
// =>{
//     const {data,error} =await supabase
//     .from('courses')
//     .select('*')
//     res.json(data)
// })

app.listen(5000, () => {
    console.log("server running on port 5000")
})