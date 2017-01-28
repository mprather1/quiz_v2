var db = require("../init");

function createQuestion(req, res, next){
  db.none('insert into questions(content, points, _quiz)' + 'values($1, $2, $3)', [req.body.content, req.body.points, req.params.id])
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      message: 'Inserted ONE question'
    });
  })
  .catch(function(err){
    return next(err)
  })
}

function getQuizQuestions(req, res, next){
  db.any('select * from questions where _quiz = $1', parseInt(req.params.id))
  .then(function(data){
    res.status(200)
    .json(data)
  })
  .catch(function(err){
    return next(err)
  })
}

module.exports = {
  createQuestion: createQuestion,
  getQuizQuestions: getQuizQuestions
};
