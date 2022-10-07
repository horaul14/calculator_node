const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/bmicalculator',function(req,res){
  res.sendFile(__dirname + '/bmiCalculator.html');

});

app.post('/bmicalculator' , function(req,res){

  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  var bmi = w /  (h * h) ;
  res.send('Your result is  ' + bmi);

  console.log(weight);
  console.log(height);


});


app.listen(3000, function(){
  console.log('Server is running on port 3000')
});
