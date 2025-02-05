# Estrutura do Projeto - API Cinema

### Estrutura de Diretórios

1. **Pasta Principal: `pb_Sprint8`**
   - Esta é a pasta raiz do projeto, contendo todos os arquivos e diretórios necessários para o desenvolvimento e teste da API Cinema.

2. **Diretório: `nestjs-cinema`**
   - Este diretório contém o código principal da aplicação, desenvolvido utilizando o framework NestJS.

3. **Diretório: `node_modules`**
   - Este diretório contém todas as dependências e módulos necessários para o projeto, instalados a partir do `npm`.

4. **Diretório: `playwright-report`**
   - Este diretório armazena os relatórios gerados pelo Playwright, nosso framework de testes.

5. **Diretório: `test-results`**
   - Este diretório contém os resultados dos testes executados, organizados de forma a facilitar a análise.

6. **Diretório: `tests`**
   - Este diretório contém os arquivos de teste, cada um responsável por testar funcionalidades específicas da API. Aqui estão alguns dos arquivos de teste incluídos:
     - `1getMovies.spec.js`
     - `2getMoviesId.spec.js`
     - `3getMoviesstories.spec.js`
     - `4postMovies.spec.js`
     - `5postMoviesthreads.spec.js`
     - `6postMoviesstories.spec.js`
     - `7putMovies.spec.js`
     - `8putMoviesthreads.spec.js`
     - `9putMoviesstories.spec.js`
     - `10deleteMovies.spec.js`
     - `11deleteMoviesthreads.spec.js`
     - `12deleteMoviesstories.spec.js`
     - `13postTickets.spec.js`
     - `14postTicketsthreads.spec.js`
     - `15postTicketststories.spec.js`

### Descrição Detalhada dos Testes Realizados

#### 1getMovies.spec.js
**Objetivo:** Testar a listagem de todos os filmes cadastrados na API.

**Descrição:**
- Envia uma solicitação GET para o endpoint /movies.
- Verifica se a resposta contém uma lista de filmes.
- Verifica se o status da resposta é 200 (OK).

**Resultado:** Sucesso (Status 200 e lista de filmes retornada).

#### 2getMoviesId.spec.js
**Objetivo:** Testar a obtenção dos detalhes de um filme específico pelo ID.

**Descrição:**
- Envia uma solicitação GET para o endpoint /movies/{id} onde {id} é o ID do filme.
- Verifica se a resposta contém os detalhes do filme especificado.
- Verifica se o status da resposta é 200 (OK).
- Verifica se a resposta para um ID inexistente retorna 404 (Not Found).

**Resultado:** Sucesso (Status 200 para filme existente e 404 para ID inexistente).

#### 3getMoviesstories.spec.js
**Objetivo:** Testar a listagem de filmes com histórias relacionadas.

**Descrição:**
- Envia uma solicitação GET para o endpoint /movies com query parameters para filtrar histórias.
- Verifica se a resposta contém uma lista de filmes com histórias relacionadas.
- Verifica se o status da resposta é 200 (OK).

**Resultado:** Sucesso (Status 200 e lista de filmes com histórias relacionadas retornada).

#### 4postMovies.spec.js
**Objetivo:** Testar a criação de um novo filme na API.

**Descrição:**
- Envia uma solicitação POST para o endpoint /movies com os detalhes do filme.
- Verifica se o filme é criado corretamente.
- Verifica se o status da resposta é 201 (Created) e inclui um ID único.

**Resultado:** Sucesso (Status 201 e ID único incluído no filme).

#### 5postMoviesthreads.spec.js
**Objetivo:** Testar a criação de múltiplos filmes em paralelo.

**Descrição:**
- Envia várias solicitações POST simultâneas para o endpoint /movies.
- Verifica se todos os filmes são criados corretamente.
- Verifica se o status da resposta é 201 (Created) para cada solicitação.

**Resultado:** Sucesso (Status 201 para todas as solicitações).

#### 6postMoviesstories.spec.js
**Objetivo:** Testar a criação de filmes com histórias específicas.

**Descrição:**
- Envia uma solicitação POST para o endpoint /movies com detalhes específicos de histórias.
- Verifica se o filme é criado com a história correta.
- Verifica se o status da resposta é 201 (Created).

**Resultado:** Sucesso (Status 201 e filme criado com a história correta).

#### 7putMovies.spec.js
**Objetivo:** Testar a atualização dos detalhes de um filme específico.

**Descrição:**
- Envia uma solicitação PUT para o endpoint /movies/{id} onde {id} é o ID do filme.
- Verifica se os detalhes do filme são atualizados corretamente.
- Verifica se o status da resposta é 200 (OK).

**Resultado:** Sucesso (Status 200 e detalhes atualizados do filme).

#### 8putMoviesthreads.spec.js
**Objetivo:** Testar a atualização de múltiplos filmes em paralelo.

**Descrição:**
- Envia várias solicitações PUT simultâneas para o endpoint /movies/{id}.
- Verifica se todos os filmes são atualizados corretamente.
- Verifica se o status da resposta é 200 (OK) para cada solicitação.

**Resultado:** Sucesso (Status 200 para todas as solicitações).

#### 9putMoviesstories.spec.js
**Objetivo:** Testar a atualização de histórias específicas em filmes.

**Descrição:**
- Envia uma solicitação PUT para o endpoint /movies/{id} com detalhes específicos de histórias.
- Verifica se a história do filme é atualizada corretamente.
- Verifica se o status da resposta é 200 (OK).

**Resultado:** Sucesso (Status 200 e história atualizada corretamente).

#### 10deleteMovies.spec.js
**Objetivo:** Testar a exclusão de um filme específico pelo ID.

**Descrição:**
- Envia uma solicitação DELETE para o endpoint /movies/{id} onde {id} é o ID do filme.
- Verifica se o filme é excluído corretamente.
- Verifica se o status da resposta é 200 (OK).

**Resultado:** Sucesso (Status 200 e filme excluído).

#### 11deleteMoviesthreads.spec.js
**Objetivo:** Testar a exclusão de múltiplos filmes em paralelo.

**Descrição:**
- Envia várias solicitações DELETE simultâneas para o endpoint /movies/{id}.
- Verifica se todos os filmes são excluídos corretamente.
- Verifica se o status da resposta é 200 (OK) para cada solicitação.

**Resultado:** Sucesso (Status 200 para todas as solicitações).

#### 12deleteMoviesstories.spec.js
**Objetivo:** Testar a exclusão de histórias específicas em filmes.

**Descrição:**
- Envia uma solicitação DELETE para o endpoint /movies/{id} para excluir histórias específicas.
- Verifica se a história do filme é excluída corretamente.
- Verifica se o status da resposta é 200 (OK).

**Resultado:** Sucesso (Status 200 e história excluída corretamente).

#### 13postTickets.spec.js
**Objetivo:** Testar a criação de um novo ticket na API.

**Descrição:**
- Envia uma solicitação POST para o endpoint /tickets com os detalhes do ticket.
- Verifica se o ticket é criado corretamente.
- Verifica se o status da resposta é 201 (Created) e inclui um ID único.

**Resultado:** Sucesso (Status 201 e ID único incluído no ticket).

#### 14postTicketsthreads.spec.js
**Objetivo:** Testar a criação de múltiplos tickets em paralelo.

**Descrição:**
- Envia várias solicitações POST simultâneas para o endpoint /tickets.
- Verifica se todos os tickets são criados corretamente.
- Verifica se o status da resposta é 201 (Created) para cada solicitação.

**Resultado:** Sucesso (Status 201 para todas as solicitações).

#### 15postTicketststories.spec.js
**Objetivo:** Testar a atribuição de um ID único a cada ticket criado.

**Descrição:**
- Obtém uma lista de filmes disponíveis enviando uma solicitação GET para o endpoint /movies.
- Seleciona aleatoriamente um ID de filme a partir da lista de filmes disponíveis.
- Gera dados aleatórios para criar um novo ticket, incluindo `movieId`, `userId`, `seatNumber`, `price` e `showtime`.
- Envia uma solicitação POST para o endpoint /tickets com os dados do novo ticket.
- Verifica se o status da resposta é 201 (Created).
- Verifica se o ticket criado contém um ID único e válido.
- Valida que o `_id` do ticket criado está presente e não é nulo ou vazio.

**Resultado:** Sucesso (Status 201 para todas as solicitações e ID único presente em cada ticket criado).

7. **Diretório: `utils`**
   - Este diretório contém arquivos utilitários que são utilizados em todo o projeto para realizar tarefas comuns. Alguns dos arquivos utilitários incluídos:
     - `cleanup.js`
     - `moviesUtils.js`
     - `ticketsUtils.js`

### Arquivos Importantes

- **`.gitignore`**
  - Este arquivo especifica quais arquivos e diretórios devem ser ignorados pelo Git, evitando que sejam commitados no repositório.

- **`package-lock.json`**
  - Este arquivo bloqueia as versões das dependências do projeto, garantindo que a instalação seja consistente entre diferentes ambientes.

- **`package.json`**
  - Este arquivo contém metadados sobre o projeto, incluindo informações sobre dependências, scripts de execução e outras configurações.

- **`playwright.config.js`**
  - Este arquivo contém as configurações do Playwright, como parâmetros de execução dos testes, browsers suportados e outras opções de configuração.

### Descrição dos Testes Realizados

1. **Testes de Funcionalidade:**
   - Testamos as rotas principais da API (GET, POST, PUT, DELETE) para garantir que todas as operações CRUD funcionem corretamente.
   - Validamos campos obrigatórios, verificamos a unicidade de títulos e asseguramos que erros adequados sejam retornados para entradas inválidas.

2. **Testes de Desempenho:**
   - Realizamos testes de desempenho para garantir que a API possa processar um grande número de solicitações em um tempo aceitável.
   - Medimos o tempo médio de resposta para várias requisições simultâneas e verificamos se ele está dentro dos limites esperados.

3. **Testes de Integração:**
   - Testamos a integração entre diferentes partes da aplicação, como a interação entre as rotas de filmes e tickets.
   - Garantimos que as operações complexas que envolvem múltiplos componentes da API funcionem corretamente e retornem os resultados esperados.
