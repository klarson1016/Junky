import  mongoose  from "mongoose"

const Schema = mongoose.Schema

export {
  Post 
}

const postSchema = new Schema({
  title: String,
  author: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  description: String,
  price: Number
})

const Post = mongoose.model('Post', postSchema)