import { Post } from '../models/post.js'
import { Comment } from '../models/comment.js'
import { index } from './index.js'

export {
  newPost as new,
  create,
  show,
  deletePost as delete,
  update,
  edit,
  addComment,
  deleteComment
}

function deleteComment (req, res) {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('back')
    })
  }

function addComment(req, res) {
  req.body.author = req.user.profile._id
  Comment.create(req.body)
  .then((comment)=> {
   Post.findById(req.params.id)
   .then((post) => {
     post.comments.push(comment._id)
     post.save()
     .then((post) => {
       res.redirect('back')
     })
   })
  })
}

function update(req, res) {
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
  .populate({
    path:'comments',
    model:'Comment',
    populate:{
      path:'author',
      model:'Profile'
    }
  })
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