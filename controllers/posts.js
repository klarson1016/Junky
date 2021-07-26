import { Post } from '../models/post.js'

export {
  newPost as new,
  create,
  show
}

function show(req, res) {
  Post.findById(req.params.id)
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