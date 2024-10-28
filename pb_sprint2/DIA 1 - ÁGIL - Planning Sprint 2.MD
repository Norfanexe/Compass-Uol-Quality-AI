# DIA 1 - ÁGIL

## CONTEÚDO

* 1 - User Stories & Issues
* 2 - Definition of Ready (DoR)
* 3 - API"s REST
* 4 - Conceitos HTTP, API REST & JSON

# 1 - User Stories & Issues

# Utilização de Boards, Issues e Labels

## 2.1 Boards (Quadros)
**Definição**: Quadros visuais para organizar e acompanhar o progresso do projeto.

**Como usar**: Crie colunas para diferentes estágios do desenvolvimento (ex: To Do, In Progress, Done).

**Exemplo**: Um board para um sprint com colunas "Backlog", "Em Desenvolvimento", "Em Teste" e "Concluído".

## 2.2 Issues (Tarefas)
**Definição**: Unidades de trabalho que representam tarefas, bugs ou melhorias.

**Como usar**: Crie issues detalhadas com descrição, responsável e prazo.

**Exemplo**: Issue "Implementar login de usuário" com descrição dos requisitos e critérios de aceitação.

## 2.3 Labels (Etiquetas)
**Definição**: Marcadores para categorizar e priorizar issues.

**Como usar**: Crie labels para prioridade, tipo de tarefa ou componente do sistema.

**Exemplo**: Labels como "Alta Prioridade", "Bug", "Feature", "Frontend", "Backend".

## Comentários e Feedback
**Importância**: Facilita a comunicação e colaboração entre membros da equipe.

**Como usar**: Adicione comentários relevantes em issues para discutir soluções ou fornecer atualizações.

**Exemplo**: Comentário em uma issue de bug detalhando os passos para reproduzir o problema.

## Tópicos Avançados

### 4.1 Integração de TO-DOs na EPIC
**Definição**: EPICs são grandes unidades de trabalho que podem conter várias issues relacionadas.

**Como usar**: Crie uma EPIC para um recurso principal e adicione issues menores como TO-DOs.

**Exemplo**: EPIC "Implementação de Sistema de Pagamento" com TO-DOs para diferentes etapas do processo.

### 4.2 Armazenamento de Documentos do Sistema
**Como usar**: Utilize o repositório do GitLab para armazenar documentação junto com o código.

**Exemplo**: Pasta "docs" no repositório contendo arquivos markdown com especificações e guias.

## Conteúdo Relacionado
- **Relacionar issues**: Aprenda a criar dependências entre tarefas para melhor planejamento.
- **Trabalhar com milestones**: Use marcos para agrupar issues e acompanhar o progresso geral.
- **Estimar tempo nas tarefas**: Adicione estimativas de tempo às issues para melhor previsibilidade do projeto.

## Melhores Práticas
- Mantenha as issues atualizadas e mova-as nos boards conforme o progresso.
- Use labels de forma consistente para facilitar a filtragem e organização.
- Encoraje a equipe a fornecer feedback e atualizar o status das tarefas regularmente.
- Revise e ajuste seu processo de gerenciamento de projetos periodicamente para otimizar a eficiência.


# 2 -  Definition of Ready (DoR)

## Definição
**DoR** significa "Definição de Pronto" e é uma técnica de qualidade e gestão de risco.

**Função**: Apoia a entrada de uma história para o delivery.

**Aplicação**: São pré-requisitos de um backlog para iniciar o desenvolvimento.

## Importância do DoR
Garante a qualidade de diversos elementos do projeto:
- História
- Épico
- Tarefa
- Sprint
- Produto

Assegura que o trabalho possa ser iniciado.

Aplicável em diferentes metodologias ágeis:
- Scrum
- Kanban
- Outras

## Critérios Importantes no DoR
- Necessidades da equipe de desenvolvimento para iniciar o trabalho
- Acessos necessários
- Ferramentas requeridas
- Documentação relevante
- Ambientes de trabalho necessários
- Permissões e aprovações necessárias

## Exemplos Práticos de DoR
Exemplos de critérios de DoR para diferentes contextos:
- Equipes de Front-End
- Produtos como Open Banking

## Responsabilidades no DoR
**Definição do DoR**: Responsabilidade de todo o time.

**Garantia de prontidão dos critérios**: Responsabilidade das lideranças:
- Team Lead
- Scrum Master
- Tech Lead
- Product Owner

## Benefícios do DoR
- Evita bloqueios no desenvolvimento
- Ajuda a cumprir prazos
- Motiva o time
- Reduz o Lead Time
- Reduz o time-to-market

# 3 - API's REST

# APIs REST

## Definição
Uma API REST (Representational State Transfer) é um estilo arquitetural para criar serviços web que permitem a comunicação entre diferentes sistemas.

**APIs RESTful** utilizam métodos HTTP padrão para realizar operações em recursos identificados por URLs.

## Métodos HTTP Comuns
- **GET**: Recuperar dados
- **POST**: Criar novos recursos
- **PUT**: Atualizar recursos existentes
- **DELETE**: Remover recursos

## Exemplo Prático
Imagine uma API para uma biblioteca:
- **GET /books** - Lista todos os livros
- **POST /books** - Adiciona um novo livro
- **GET /books/123** - Obtém detalhes do livro com ID 123
- **PUT /books/123** - Atualiza informações do livro 123
- **DELETE /books/123** - Remove o livro 123

## Códigos de Status HTTP
Os códigos de status HTTP são números de três dígitos incluídos nas respostas das requisições HTTP, indicando o resultado da operação solicitada. Eles são divididos em cinco classes principais:

### 2.1. Classe 1xx: Informacional
- **100 Continue**: O servidor recebeu a solicitação inicial e o cliente pode continuar com a solicitação.
- **101 Switching Protocols**: O servidor está mudando os protocolos conforme solicitado pelo cliente.

**Exemplo**: Um cliente enviando um arquivo grande pode receber um 100 Continue antes de enviar o corpo da requisição.

### 2.2. Classe 2xx: Sucesso
- **200 OK**: A solicitação foi bem-sucedida.
- **201 Created**: A solicitação foi bem-sucedida e um novo recurso foi criado.
- **204 No Content**: A solicitação foi bem-sucedida, mas não há conteúdo para enviar de volta.

**Exemplo**: Ao criar um novo usuário via POST, o servidor pode responder com 201 Created.

### 2.3. Classe 3xx: Redirecionamento
- **301 Moved Permanently**: O recurso solicitado foi movido permanentemente para uma nova URL.
- **302 Found**: O recurso solicitado foi encontrado, mas está temporariamente em uma URL diferente.
- **304 Not Modified**: O recurso não foi modificado desde a última solicitação.

**Exemplo**: Um site que mudou de domínio pode usar 301 para redirecionar permanentemente os visitantes para o novo endereço.

### 2.4. Classe 4xx: Erro do Cliente
- **400 Bad Request**: A solicitação não pôde ser entendida pelo servidor devido a sintaxe inválida.
- **401 Unauthorized**: A solicitação requer autenticação do usuário.
- **403 Forbidden**: O servidor entendeu a solicitação, mas se recusa a autorizá-la.
- **404 Not Found**: O recurso solicitado não foi encontrado no servidor.

**Exemplo**: Tentar acessar uma página que não existe resultará em um erro 404.

### 2.5. Classe 5xx: Erro do Servidor
- **500 Internal Server Error**: O servidor encontrou uma condição inesperada que impediu a solicitação de ser atendida.
- **502 Bad Gateway**: O servidor, ao atuar como um gateway ou proxy, recebeu uma resposta inválida do servidor upstream.
- **503 Service Unavailable**: O servidor está temporariamente indisponível, geralmente devido a manutenção ou sobrecarga.

**Exemplo**: Durante uma manutenção programada, um site pode retornar 503 Service Unavailable.

## Grupos Mais Importantes e Frequentes
Os grupos mais importantes e frequentemente utilizados são:
- **2xx: Sucesso**: Indica que a solicitação foi bem-sucedida. O código 200 (OK) é o mais comum.
- **4xx: Erro do Cliente**: Indica que houve um problema com a solicitação do cliente. O código 404 (Not Found) é um dos mais frequentes.
- **5xx: Erro do Servidor**: Indica que houve um problema no servidor ao processar a solicitação. O código 500 (Internal Server Error) é bastante comum.
