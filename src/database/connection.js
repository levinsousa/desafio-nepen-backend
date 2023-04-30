import mongoose from "mongoose";

function createConnection(){

  console.log("Conectando ao banco!")

  mongoose
    .connect(
      "mongodb+srv://levinsousa:hHpxUyIAJDqDiICD@nepencluster.lrhmpg9.mongodb.net/desafionependb?retryWrites=true&w=majority"
    ).then(
      console.log("Conectado com sucesso")
    )
    .catch(err => console.error(err))
}

createConnection()