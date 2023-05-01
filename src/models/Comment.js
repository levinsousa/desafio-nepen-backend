import mongoose from "mongoose";

const Comment = mongoose.model('Comment', {
  comment: String,
  userId: String,
  movieId: String
})

export default Comment