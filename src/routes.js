import { Router } from "express";
import MoviesController from "./controllers/MoviesController.js";

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

export default routes