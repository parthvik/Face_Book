const express = require('express');
const router= express.Router();
const homeController= require('../controllers/home_controller');
console.log("router loaded");
router.get('/', homeController.home);
router.use('/users', require('./users'));
// router.use('/posts', require('./posts'));
// router.use('/comments', require('./comments'));
// router.use('/likes', require('./likes'));
// router.use('/follows', require('./follows'));
// router.use('/notifications', require('./notifications'));
// router.use('/messages', require('./messages'));
// router.use('/search', require('./search'));
// router.use('/chat', require('./chat'));
// router.use('/chat/messages', require('./chat_messages'));
// router.use('/chat/messages/:id', require('./chat_messages'));



module.exports =router;
