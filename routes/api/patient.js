const express = require('express');
const router = express.Router();
const Patient = require("../../models/Patient")



// @route    GET api/patient
// @desc     Get Answers
// @access   Private
router.get('/get-answer', async (req, res) => {
    try {  
    const patient = await Patient.find();
    res.json(patient);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });




// @route    POST api/patient
// @desc     Add Answers
// @access   Private
router.post('/answer', async (req, res) => {
    try {  
    const patient = new Patient({answers:req.body.answer})
    await patient.save();
    res.json(patient);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;