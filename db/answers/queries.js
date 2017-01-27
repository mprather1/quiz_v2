var db = require("../init");

function createAnswer(req, res, next){
  db.none('insert into answers(content, _question)' + 'values($1, $2)', [req.body.content, req.params.id])
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      message: 'Inserted ONE answer'
    })
  })
  .catch(function(err){
    return next(err)
  })
}

function getQuestionsAnswers(req, res, next){
  db.any('select * from answers where _question = $1', parseInt(req.params.id))
  .then(function(data){
    res.status(200)
    .json(data)
  })
  .catch(function(err){
    return next(err)
  });
}

module.exports = {
  createAnswer: createAnswer,
  getQuestionsAnswers: getQuestionsAnswers
};