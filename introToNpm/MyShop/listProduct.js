var faker = require('faker');
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomImage = faker.image.image();

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log( randomImage );