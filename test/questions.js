var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;
var db = require("../db").init;


chai.use(chaiHttp);

describe("Clear questions...", function() {
  
  before(function(done){
    db.none('TRUNCATE questions RESTART IDENTITY');
    db.none('TRUNCATE quizzes RESTART IDENTITY');
    done();
  });
  
  it('should not see data', function(done) {
    db.any('select * from questions')
    .then(function(data){
      expect(data).to.deep.equal([]);
    }).then(done, done);
  });

})

describe("Questions", function(done) {
  
  before(function(done){
    db.none('insert into quizzes(title)' + 'values($1)', "test")
    done();
  });
  
  it('should add a SINGLE question at /quizzes/:id/questions', function(done){
    chai.request(server)
    .get('/api/quizzes')
    .end(function(error, response){
      chai.request(server)
      .post('/api/quizzes/' + response.body[0].id + '/questions')
      .send({ "content":"question" })
      .end(function(err, res){
        expect(res).to.have.status(200)
        expect(res.body).to.have.status('success')
        done();
      })
    })
  });
  
  it("should list ALL questions at /quizzes/:id/questions", function(done) {
    chai.request(server)
    .get('/api/quizzes')
    .end(function(error, response){
      chai.request(server)
      .get('/api/quizzes/' + response.body[0].id + '/questions')
      .end(function(err, res){
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        expect(res.body[0]).to.have.property('id')
        done()
      })
    })
  })
})