import Comment from '../models/Comment.js'

export default{

  async getAllComments(req, res){
    // #swagger.tags = ['Comentários']
    // #swagger.summary = 'Retorna todos os comentários'
    try {
      const allComments = await Comment.find()
      res.status(201).json(allComments)
    } catch (error) {
      res.status(500).json({error: "err"})
    }
  },

  async getComment(req, res){
    // #swagger.tags = ['Comentários']
    // #swagger.summary = 'Retorna um comentário específico'
    const { movieId, userId } = req.query
    try {
      const comment = await Comment.find({movieId, userId})
      res.status(201).json(comment)
    } catch (err) {
      res.status(500).json({error: err})
    }
  },

  async addComment(req, res){
    // #swagger.tags = ['Comentários']
    // #swagger.summary = 'Adiciona um comentário'
    const { comment, userId, movieId } = req.body

    const commentToAdd = {
      comment,
      userId,
      movieId
    }
    
    try{
      Comment.create(commentToAdd)
      res.status(201).json({message: "Comentário adicionado com sucesso"})
    }catch(err){
      res.status(501).json({error: err})
    }
  },

  async modifyComment(req, res){
    // #swagger.tags = ['Comentários']
    // #swagger.summary = 'Modifica um comentário específico'
    const id = req.params.id
    const { comment, userId, movieId } = req.body

    const commentToModify = {
      comment,
      userId,
      movieId
    }

    try {
      const updatedComment = await Comment.updateOne({_id: id}, commentToModify)

      if(updatedComment.matchedCount === 0){
        res.status(422).json({error: "Comentário não localizado ou inexistente"})
        return
      }

      res.status(200).json(commentToModify)

    } catch (err) {
      res.status(501).json({error: err})
    }
  },

  async deleteComment(req, res){
    // #swagger.tags = ['Comentários']
    // #swagger.summary = 'Deleta um comentário específico'
    const id = req.params.id

    try {
      const oneComment = await Comment.findOne({_id: id})
      if(!oneComment){
        res.status(422).json({error: "Comentário não localizado ou inexistente"})
        return
      }

      await Comment.deleteOne({_id: id})
      res.status(200).json({message: "Comentário removido com sucesso"})
    } catch (err) {
      res.status(501).json({error: err})
    }
  }
  
}