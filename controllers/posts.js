import { Post } from '../models/post.js'
import { index } from './index.js'

export {
  newPost as new,
  create,
  show,
  deletePost as delete,
  update,
  edit
}

function update(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  // Remove key/value pairs that are empty strings
  // for schema defaults to work properly
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, post) {
    res.redirect(`show/${post._id}`)
  })
}

function edit(req, res) {
  Post.findById(req.params.id, function(err, post) {
    res.render('posts/edit', {
      post,
      err,
      title: "Edit Post"
    })
  })
}

function deletePost (req, res) {
Post.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/')
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