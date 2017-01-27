var db = require("../init");

function getAllQuizzes(req, res, next){
  db.any('select * from quizzes')
  .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });  
}

function getSingleQuiz(req, res, next){
  var quizID = parseInt(req.params.id);
  db.one('select * from quizzes where id = $1', quizID)
    .then(function(data){
      res.status(200)
       .json(data);
    })
    .catch(function(err){
      return next(err);
    });
}

function createQuiz(req, res, next){
  db.none('insert into quizzes(title)' + 'values(${title})', req.body)
  .then(function(){
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted ONE quiz'
      });
  })
  .catch(function(err){
    return next(err);
  });
}

function updateQuiz(req, res, next){
  db.none('update quizzes set title=$1 where id=$2', [req.body.title, parseInt(req.params.id)])
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated quiz'
        });
    })
    .catch(function(err){
      return next(err);
    });
}

function removeQuiz(req, res, next){
  var quizID = parseInt(req.params.id);
  db.result('delete from quizzes where id = $1', quizID)
    .then(function(result){
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} quiz`
        });
    })
    .catch(function(err){
      return next(err);
    });
}

module.exports = {
  getAllQuizzes: getAllQuizzes,
  getSingleQuiz: getSingleQuiz,
  createQuiz: createQuiz,
  updateQuiz: updateQuiz,
  removeQuiz: removeQuiz
};