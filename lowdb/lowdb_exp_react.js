
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('lowdb_react.json')
const db = low(adapter)
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')


app.use(bodyParser.json())
app.use(cors())

db.defaults({ data:[] }).write()
app.get('/kirim',(req,res)=>{

var y = db.get('data').value();
res.send(y);  
});

app.post('/kirim', (req, res)=>{
    console.log(req.body);
    db.get('data').push({ 
        nama:req.body.nama,
        usia:req.body.usia,
        alamat:req.body.alamat
    }).write();
    res.send({ 
        status: 'POST berhasil',
        nama: req.body.nama,
        usia: req.body.usia,
        alamat:req.body.alamat
    });
})

app.listen(3330, ()=> {
console.log('Server @port 3330!')
  });
  // listening port 3000
  
