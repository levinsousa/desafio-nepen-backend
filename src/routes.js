import { Router } from "express";
import MoviesController from "./controllers/MoviesController.js";
import CommentsController from "./controllers/CommentsController.js";

const routes = Router()

routes.get('/', (req,res)=>res.json({
  get_all_movies: "http://localhost:5500/movies",
  get_one_movies: "http://localhost:5500/movie/{movieId}"
}))

// Rotas da entidade filme
routes.get('/movies',(req,res)=>MoviesController.getMovies(req,res))
routes.get('/movie/:id',(req,res)=>MoviesController.getMovieId(req,res))
routes.post('/movie',(req,res)=>MoviesController.addMovie(req,res))
routes.patch('/movie/:id',(req,res)=>MoviesController.modifyMovie(req,res))
routes.delete('/movie/:id',(req,res)=>MoviesController.deleteMovie(req,res))

// Rotas dos comentários
routes.get('/comments/',(req,res)=>CommentsController.getAllComments(req,res))
routes.get('/comment/:idMovie',(req,res)=>CommentsController.getComment(req,res))
routes.post('/comment',(req,res)=>CommentsController.addComment(req,res))
routes.patch('/comment/:id',(req,res)=>CommentsController.modifyComment(req,res))
routes.delete('/comment/:id',(req,res)=>CommentsController.deleteComment(req,res))

export default routes