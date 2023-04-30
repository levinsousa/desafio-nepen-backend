import mongoose from "mongoose";

const Movie = mongoose.model('Movie', {
  title: String,
  duration: String,
  yearMovie: Number,
  description: String,
  urlPoster: String
})

export default Movie