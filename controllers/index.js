import { Post } from "../models/post.js"

export {
  index,

}

function index(req, res) {
  Post.find({})
  .sort({_id: -1})
  .populate('author')
  .then( posts => {
    res.render('index', {
      posts: posts,
      title: 'Welcome to Junky!'
    })
  })
  
}