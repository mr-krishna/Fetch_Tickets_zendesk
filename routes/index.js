var express = require('express');
var router = express.Router();
var axios=require('axios');

axios({
    method: 'get',
    url: "https://kcmrkrishna.zendesk.com/api/v2/tickets.json",
    auth:
        {
            username:  'kcmrkrishna@gmail.com'+'/token',
            password: 'JvuUdCw0Mtwabq0jLmFqwDsST1oLoaiVt805n44A'
        }
}).then(function(response){
   // console.log(response.data.tickets);
    router.get('/', function(req, res, next) {
        res.render('index', { title:  response.data.tickets});
    });

});
/* GET home page. */

module.exports = router;
