var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;
var db = require("../db").init;

chai.use(chaiHttp);

describe("Clear quizzes...", function(done) {
  
  before(function(done){
    db.none('TRUNCATE quizzes RESTART IDENTITY');
    done();
  });
  
  it('should not see data', function(done) {
    db.any('select * from quizzes')
    .then(function(data){
      expect(data).to.deep.equal([]);
      }).then(done, done);
  });
});

describe('Quizzes', function(){
  
  it('should add a SINGLE quiz at /quizzes POST', function(done) {
    chai.request(server)
    .post('/api/quizzes')
    .send({"title":"title"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list ALL quizzes at /quizzes/active GET', function(done){
    chai.request(server)
      .get('/api/quizzes')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('title');
        expect(res.body[0].title).to.equal('title')
        done();
      });
  });
  
  it('should update a SINGLE quiz at /quizzes/:id PUT', function(done) {
    chai.request(server)
    .put('/api/quizzes/1')
    .send({"title":"hello"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list a SINGLE quiz at /quiz/:id GET', function(done) {
    chai.request(server)
      .get('/api/quizzes/1')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('title');
        done();
      });    
  });
  
   
  it('should delete a SINGLE quiz at /quizzes/:id DELETE', function(done) {
    chai.request(server)
      .get("/api/quizzes/")
      .end(function(err, res) {
        chai.request(server)
          .delete("/api/quizzes/" + res.body[0].id )
          .end(function(error, response){
            expect(response).to.have.status(200);
            expect(response).to.be.json;
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.status('success');
            done();
          });
      });
  });
});