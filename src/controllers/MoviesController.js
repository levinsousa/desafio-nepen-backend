import Movie from '../models/Movie.js'

export default{

  async getMovies(req, res){
    // #swagger.tags = ['Filmes']
    // #swagger.summary = 'Retorna todos os filmes'
    const { search } = req.query
    try {
      if(!search){
        const allMovies = await Movie.find()
        res.status(200).json(allMovies)  
        return
      }
      const allMovies = await Movie.find({title: {'$regex':search}})
      res.status(200).json(allMovies)
    } catch (error) {
      res.status(500).json({error: "err"})
    }
  },

  async getMovieId(req, res){
    // #swagger.tags = ['Filmes']
    // #swagger.summary = 'Retorna um filme específico'
    const id = req.params.id
    try {
      const oneMovie = await Movie.findOne({_id: id})

      if(!oneMovie){
        res.status(200).json({
          "title" : "Filme não encontrado",
          "duration" : ":/",
          "yearMovie" : 0,
          "description" : "Poxa infelizmente não encontramos",
          "urlPoster" : "Poster do filme"
        })
        return
      }

      res.status(200).json(oneMovie)
    } catch (error) {
      res.status(500).json({error: "err"})
    }
  },

  async addMovie(req, res){
    // #swagger.tags = ['Filmes']
    // #swagger.summary = 'Adiciona um filme'
    const { title, duration, yearMovie, description, urlPoster } = req.body

    const movie = {
      title,
      duration,
      yearMovie,
      description,
      urlPoster
    }

    if(!title){
      res.status(422).json({message: "O filme deve conter Título"})
      return
    }

    if(isNaN(yearMovie)){
      res.status(422).json({message: "O filme deve conter um ano válido, (Number)"})
      return
    }

    try{
      Movie.create(movie)
      res.status(201).json({message: "filme adicionado com sucesso"})
    }catch(err){
      res.status(501).json({error: err})
    }
  },

  async modifyMovie(req, res){
    // #swagger.tags = ['Filmes']
    // #swagger.summary = 'Modifica um filme específico'
    const id = req.params.id
    const { title, duration, yearMovie, description, urlPoster } = req.body
    const movie = {
      title,
      duration,
      yearMovie,
      description,
      urlPoster
    }

    try {
      const updatedMovie = await Movie.updateOne({_id: id}, movie)

      if(updatedMovie.matchedCount === 0){
        res.status(422).json({error: "Filme não localizado ou inexistente"})
        return
      }

      res.status(200).json(movie)

    } catch (err) {
      res.status(501).json({error: err})
    }
  },

  async deleteMovie(req, res){
    // #swagger.tags = ['Filmes']
    // #swagger.summary = 'Deleta um filme específico'
    const id = req.params.id

    try {
      const oneMovie = await Movie.findOne({_id: id})
      if(!oneMovie){
        res.status(422).json({error: "Filme não localizado ou inexistente"})
        return
      }

      await Movie.deleteOne({_id: id})
      res.status(200).json({message: "Filme removido com sucesso"})
    } catch (err) {
      res.status(501).json({error: err})
    }
  }
}
