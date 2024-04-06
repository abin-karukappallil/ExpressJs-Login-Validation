var express = require('express');
var router = express.Router();

const credentials = {
    email: "admin@admin.com",
    password: "admin"
}

router.post('/login',(req,res) => {
    if(req.body.email==credentials.email && req.body.password==credentials.password){
        req.session.user=req.body.email;
      //  res.redirect('/dashboard');
      res.end("success");
    }
    else{
        res.end("Inavlid Username");
    }
    })
    module.exports = router;