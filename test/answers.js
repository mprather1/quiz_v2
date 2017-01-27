var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;
var db = require("../db").init;

chai.use(chaiHttp);

describe("Clear answers...", function(done){
  
  before(function(done){
    db.none('TRUNCATE quizzes RESTART IDENTITY');
    db.none('TRUNCATE questions RESTART IDENTITY');
    db.none('TRUNCATE answers RESTART IDENTITY');
    done();
  });
  
  it('should not see data', function(done){
    db.any('select * from answers')
    .then(function(data){
      expect(data).to.deep.equal([]);
      }).then(done, done);
  });
});

describe("Answers", function(){
  
  before(function(done){
    db.none('insert into quizzes(title)' + 'values($1)', "test")
    db.none('insert into questions(content, _quiz)' + 'values($1, $2)', ["test", 1])
    done();
  });
  
  it('should add a SINGLE Answer at /questions/:id/answers', function(done){
    chai.request(server)
    .get('/api/quizzes')
    .end(function(error, response){
      chai.request(server)
      .get('/api/quizzes/' + response.body[0].id + '/questions')
      .end(function(error, res){
        expect(res.body[0]).to.have.property('id')
        chai.request(server)
        .post('/api/questions/' + res.body[0].id + '/answers')
        .send({ "content": "test answer" })
        .end(function(err, data){
          expect(data).to.have.status(200)
          expect(data.body).to.have.status('success')
          done();
        })
      })      
    })
  })
  
  it('should list ALL answers at /questions/:id/answers', function(done) {
    chai.request(server)
    .get('/api/quizzes')
    .end(function(error, response){
      chai.request(server)
      .get('/api/quizzes/' + response.body[0].id + '/questions')
      .end(function(err, res){
        chai.request(server)
        .get('/api/questions/' + res.body[0].id + '/answers')
        .end(function(err, data){
          expect(data).to.have.status(200)
          done()
        })
      })
    })
  })
})