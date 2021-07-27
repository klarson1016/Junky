import { Comment } from '../models/comment.js'

export { 
  index,
  create,
  show,
  
}


function create(req, res) {
  // Add currently logged in user's profile id to req.body
  req.body.author = req.user.profile._id
  Comment.create(req.body)
  .then(()=> {
    res.redirect('/posts')
  })
}

function index(req, res) {
  Comment.find({})
  .populate('author')
  .sort({ createdAt: "desc" })
  .then(comments => {
    res.render('messages/index', {
      title: "Message Board",
      comments
    })
  })
}