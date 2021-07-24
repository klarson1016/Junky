import { Post } from '../models/post.js'

export {
  newPost as new,
  create
}

function create(req, res) {
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