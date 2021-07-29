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
  addComment
}


// function addComment(req, res) {
//   req.body.author = req.user.profile._id
//   Comment.findById(req.params._id)
//   .then(comment => {
//     post.comment.push(req.body)
//     message.save()
//     .then(() => {
//       res.redirect(`/show/${req.params.id}`)
//     })
//   })
// }

function addComment(req, res) {
  req.body.author = req.user.profile._id
  Comment.create(req.body)
  .then((comment)=> {
    console.log(comment)
   Post.findById(req.params.id)
   .then((post) => {
     post.comments.push(comment._id)
     console.log(post)
     post.save()
     .then((post) => {
      console.log(post)
       res.redirect('back')
     })
   })
  })
}

function update(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
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
  .populate('comments')
  .then( post => {
    console.log(post)
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