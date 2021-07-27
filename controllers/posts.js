import { Post } from '../models/post.js'
import { index } from './index.js'

export {
  newPost as new,
  create,
  show,
  deletePost as delete
}

function deletePost (req, res) {
Post.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/')
  })
}

// function deletePost(req, res) {
//   Post.findByIdAndDelete(req.params.id, function(err, post) {
//     res.redirect('/index')
//   })
// }

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
//60ff19e06ed22c98c4fd303a

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