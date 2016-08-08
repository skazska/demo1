/**
 * Created by ska on 6/6/16.
 */

module.exports = function(db){

  var col = db.collection('rootCollection');

  return {
    getRoot: function(req, res, next){
      col.find({_id: req.params.requestId}).limit(1).next(function(err, values){
        res.xSet(200, values, next);
      })
    },
    postRoot: function(req, res, next){
      if (req.body.requestId) {
        var id = req.body.requestId;
        delete req.body.requestId;
        col.updateOne({_id:id.toString()}, {$set: req.body}, { upsert : true })
          .then(
            function(r) {
              req.body.requestId = id;
              res.xSet(200, req.body, next);
            },
            function(err) {
              res.xSet(500, err, next);
            }
          );
      }
    }
  }
};