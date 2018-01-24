var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()});

app.use(express.static('public'));

app.post('/filesize', upload.single('file'), function(req,res, next){
  res.json({
    'filesize': req.file.size,
  });
});

app.get('/', function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});

app.listen(process.env.PORT||3000);