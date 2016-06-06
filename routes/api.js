var express = require('express');
var router = express.Router();


module.exports = function(controller){
  /* GET home page. */
  router.get('/:requestId', controller.getRoot);
  router.post('/', controller.postRoot);

  return router;

};
