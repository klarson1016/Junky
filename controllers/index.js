//import { Profile } from "../models.profile.js"
import { Post } from "../models/post.js"

export {
  index,
}

function index(req, res) {
  console.log('inside index ctrl')
  Post.find({})
  .sort({_id: -1})
  .populate('author')
  .then( posts => {
    res.render('index', {
      posts: posts,
      title: 'Home Page'
    })
  })
  
}