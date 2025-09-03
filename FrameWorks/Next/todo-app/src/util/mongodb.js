// arquivo que vai auxiliar na conexao com o banco de dados MongoDB

// importar a biblioteca do MongoDB
import mongoose from 'mongoose';

// arrow function
const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) // estabelecer a conexao com o mongoDB
        .then(() => console .log('Conectado ao MongoDB'))
        .catch( err => console .error('Erro ao conectar ao MongoDB', error));
}

export default connectMongo;