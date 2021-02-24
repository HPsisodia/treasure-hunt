const express = require('express');
const router = express.Router();

router.get('/dashboard/:id', (req,res) =>{
    
    res.render('dashboard');
    
});


module.exports = router;