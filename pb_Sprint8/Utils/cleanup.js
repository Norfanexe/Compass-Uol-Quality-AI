const fs = require('fs');

// Caminho dos arquivos movies.db e tickets.db
const moviesPath = 'C:/Users/Norfa/Desktop/COMPASS NORFAN/trilha-1/nestjs-cinema/movies.db';
const ticketsPath = 'C:/Users/Norfa/Desktop/COMPASS NORFAN/trilha-1/nestjs-cinema/tickets.db';

// Função para limpar o conteúdo de um arquivo
function clearFile(path, fileName) {
  fs.writeFile(path, '', (err) => {
    if (err) {
      console.error(`Erro ao limpar o conteúdo do arquivo ${fileName}: ${err}`);
    } else {
      console.log(`Conteúdo do arquivo ${fileName} limpo com sucesso.`);
    }
  });
}

// Limpar o conteúdo dos arquivos movies.db e tickets.db
clearFile(moviesPath, 'movies.db');
clearFile(ticketsPath, 'tickets.db');
