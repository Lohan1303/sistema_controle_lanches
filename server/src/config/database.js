const mongoose = require('mongoose');

// URL para se conectar ao MongoDB
const url = 'mongodb://localhost:27017/sistema_controle_lanches'; // Ou 'mongodb://127.0.0.1:27017/aluno'
mongoose.connect(url, {
    useUnifiedTopology: true, // Usar o novo mecanismo de topologia
    useNewUrlParser: true // Mantenha por enquanto, mas você pode removê-lo em versões futuras
});

// Expor o módulo Mongoose
module.exports = mongoose;
