var express = require('express');
var router = express.Router();
var ejs=require('ejs');
function add(req,res)
{
    console.log("In add Function");
           var router = express.Router();
        var axios=require('axios');
        var url="https://"+req.sub-domain+".zendesk.com/api/v2/tickets.json";
        axios({
            method: 'get',
            url: url,
            auth:
                {
                    username:  req.email+'/token',
                    password: req.token
                }
        }).then(function(response){
            console.log(response.data.tickets);
            ejs.renderFile('./views/index.ejs',{title:response.data.tickets},function(err,result){
                // if it is success
                if(!err)
                {
                    res.end(result);
                }
                //ERROR
                else
                {
                    res.end("ERROR OCCURED ");
                    console.log(err);
                }
            });
    });
}
exports.add=add;
module.exports = router;
