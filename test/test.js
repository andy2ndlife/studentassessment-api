var request = require('supertest');
var app = require('../app.js');
describe('GET /', function() {
 it('respond with Student Assessment API', function(done) {
 //navigate to root and check the the response is "Student Assessment API"
 request(app).get('/').expect('Student Assessment API', done);
 });
});