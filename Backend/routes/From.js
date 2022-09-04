//Routes for student form
const router = require('express').Router();
const Student = require('../models/Form')

//http://localhost:5000/Student/add

//display all the students in the database
router.route("/").get((req,res) =>{
    Student.find().then((students) =>{
        res.json(students)
        console.log(students)
    }).catch((e) =>{
        alert(e);
    })

})

//create new student
router.route("/add").post((req,res) =>{
    const name = req.body.name;
    const mobile = req.body.telephone;

    const newStudent = new Student({
        name,
        mobile

    })

    //sending the request
    newStudent.save().then(()=>{
        console.log("Successfully inserted!");
        res.json("added")
    }).catch((e)=>{
        console.log(e);
    })
})

//update student
router.route("/update/:id").put(async(req,res) =>{
    const id = req.params.id;

    const {name,mobile} = req.body;

    const updateStudentDetails = {
        name,
        mobile,
    };
    await Student.findByIdAndUpdate(id,updateStudentDetails).then(()=>{
        res.status(200).send({state : "User Updated",user : updateStudentDetails})
    }).catch((e) =>{
        console.log(e);
    })
})

//delete student

router.route("/delete/:id").delete(async (req,res)=>{
    const id = req.params.id;

    await Student.findByIdAndDelete(id).then(() =>{
        res.status(200).send({state : 'Success'})
    }).catch ((e) =>{
        console.log(e)
        res.status(500).send({status : 'Error'})
    }) 
    
})


module.exports = router;
