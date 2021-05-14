const router = require('express').Router();
const Blog = require('../model/blog.model');

// add blog
router.route('/add').post((req, res) => {
  const blog = new Blog({
    title: req.body.title,
    body: req.body.body,
  });
  blog
    .save()
    .then(() => res.json('Blog added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// show all
router.route('/').get((req, res) => {
  Blog.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// show specific
router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// update specific
router.route('/update/:id').post((req, res) => {
  Blog.findById(req.params.id)
    .then((data) => {
      data.title = req.body.title;
      data.body = req.body.body;

      data
        .save()
        .then(() => res.json('Blog Updated'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete specific
router.route('/delete/:id').delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog Deleted'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
