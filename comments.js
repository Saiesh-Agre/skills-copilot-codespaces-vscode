//create web server
const express = require('express');
const router = express.Router();
//require the comments controller file
const commentsCtrl = require('../controllers/comments');
//require the middleware
const auth = require('../middleware/auth');

//create routes
router.post('/', auth, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.getAllComments);
router.get('/:id', auth, commentsCtrl.getOneComment);
router.put('/:id', auth, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

//export the router
module.exports = router;