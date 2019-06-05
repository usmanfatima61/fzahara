var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo_DB",{ useNewUrlParser: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var kittySchema = new mongoose.Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})


// var mongodbSchema = new mongoose.Schema({
//     title:String,
//     image:String,
//     body:String,
//     created:{type:Date, default:Date.now}
// });
// var mongodb = mongoose.model("learningMomgoDb",mongodbSchema);//"learningMomgoDb" is the collection name in DB
// mongodb.create({
//     title:"Mummy and I",
//     image:"https://lh3.googleusercontent.com/vCWUQnkTPgrKIcR3XHb6VamOgmrXo-mSBS--vNt0r2PcVQdeRP9Bfz1qRAQAF1janmSmXU6bzj2L7QbvnIM7uZVS7GO9R7uIbHtATDhcgkorha4P43VXa6DURNPUfiU17hSugGN2w7ILRy-pFq6-rzJmboHzHsGes7wlE37UkqZYM1ASx4R-EybB-N6m7mqyRFwPVzHZ8cRdKqBkAaaIpMQqLo4Xk6XLezW-oFHCF198f_7oR66km0v-A0Gr77El0x64ofnX4Ep7ZwsCoEudc1JN4KeyU0CLYKdHdd1PNyKV5lmuLSrLU2oDRZSaVwMf8aPF_hULFjVolInK8CHNVPslBJFVBkX_evvFUyHDBMSRD0T51QYuTlsMoGPs5TivLmYUT_cxO0X9g09IwlM-Knd1EtYemgRftMd3-UuimvkOMDlm-uBr3Q0eoSyXWG6PeF-5iHB4KDvbGXdJa6RXr3KUem50mHZEr1P-PtEDJGC4c-dUQfFuDdPAn9ZU9LEyzUr5hOdtptfG6Huxi6RVM_i0beorc2YRKyqJFqZCaD6uRh-hQD8Z_S5XqlQbBBc0H3W2jd0LOxeIB8_Fn1tEC_buTJ2P7tcSlypbq7ufbN4L9fYc1toNX3SLWQAm6bZNwBQixPv3sAnxz-qWWazvTrsacg=w674-h897-no",
//     body:"mummy loves you"
// });

