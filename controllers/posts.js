import { Post } from '../models/post.js'

export {
  newPost as new,
  create,
  show,
  deletePost as delete
}

function deletePost (req, res) {
Post.findByIdAndDelete(req.params.id)
  .then( post => {
    res.render('index')
    post
  })
}

function show(req, res) {
  Post.findById(req.params.id)
  .populate('author')
  .then( post => {
    res.render('posts/show', {
      post: post,
      title: 'Details Page'
    })
  })

}

function create(req, res) {
  req.body.author = req.user.profile._id
  const post = new Post(req.body)
  post.save(function(err) {
    if (err) return res.redirect('/posts/new')
    res.redirect('/')
  })
}

function newPost(req, res) {
  res.render('posts/new')
  console.log(req, res)
}