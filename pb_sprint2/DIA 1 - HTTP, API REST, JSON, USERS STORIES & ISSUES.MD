# DIA 1 - ÁGIL

## CONTEÚDO

* 1 - Gerenciamento pelo git (User Stories & Issues)
* 2 - Definition of Ready (DoR)
* 3 - API"s REST
* 4 - Conceitos HTTP, API REST & JSON
* 5 - Estrutura para reporte de bugs

# 1 - Gerenciamento pelo git (User Stories & Issues)

## Boards (Quadros)

**Definição**: Quadros visuais para organizar e acompanhar o progresso do projeto de um projeto.

**Como usar**: Criar colunas para diferentes estágios do desenvolvimento (ex: To Do, In Progress, Done).

**Exemplo**: Um board para um sprint com colunas "Backlog", "Em Desenvolvimento", "Em Teste" e "Concluído", para facilitar a organização das demandas e segmento do projeto.

## Issues (Tarefas)
**Definição**: Unidades de trabalho que representam tarefas, bugs ou melhorias.

**Como usar**: Criar issues detalhadas com descrição, responsável e prazo.

## Labels (Etiquetas)
**Definição**: Marcadores para categorizar e priorizar issues.

**Como usar**: Criar labels para prioridade, tipo de tarefa ou componente do sistema.

## Comentários e Feedback

**Importância**: Facilita a comunicação e colaboração entre membros da equipe.

**Como usar**: Adicione comentários relevantes em issues para discutir soluções ou fornecer atualizações.

## Tópicos Avançados

### 1 - Integração de TO-DOs na EPIC
**Definição**: EPICs são grandes unidades de trabalho que podem conter várias issues relacionadas.

**Como usar**: Crie uma EPIC para um recurso principal e adicione issues menores como TO-DOs.

### 2 - Armazenamento de Documentos do Sistema
**Como usar**: Utilize o repositório do GitLab para armazenar documentação junto com o código.

# 2 -  Definition of Ready (DoR)

## Definição

**DoR** significa "Definição de Pronto" e é uma técnica de qualidade e gestão de risco.

**Função**: Apoia a entrada de uma história para o delivery.

**Aplicação**: São pré-requisitos de um backlog para iniciar o desenvolvimento.

## Importância do DoR
1 - Garante a qualidade de diversos elementos do projeto:

- História: Garante que a história esteja bem definida, com critérios claros e detalhados, permitindo que a equipe de desenvolvimento entenda exatamente o que precisa ser feito.
- Épico: Garante que o épico esteja bem estruturado e dividido em histórias menores e gerenciáveis. Isso facilita o planejamento e a execução do trabalho.
- Tarefa: Garante que cada tarefa esteja claramente definida e tenha todos os recursos e informações necessários para ser concluída.
- Sprint: Garante que todas as histórias e tarefas planejadas para a sprint estejam prontas para serem trabalhadas, evitando bloqueios e atrasos.
- Produto: Garante que todos os aspectos do produto estejam prontos para serem desenvolvidos e entregues

2 - Assegura que o trabalho possa ser iniciado, aplicável em diferentes metodologias ágeis:
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

## Responsabilidades no DoR
**Definição do DoR**: Responsabilidade de todo o time.

**Garantia de prontidão dos critérios**: Responsabilidade das lideranças:
- Team Lead
- Scrum Master
- Tech Lead
- Product Owner

# 3 - API's REST

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

# 4 - Conceitos HTTP, API REST & JSON

## Documentação de Conceitos: Microssserviços, APIs, HTTP e REST

## 1. Microssserviços x Monolito

### Monolítico
**Vantagens**:
- Fácil de entender
- Curva de aprendizado menor

**Desvantagens**:
- Escalabilidade limitada
- Dependência entre componentes

### Microssserviços
**Vantagens**:
- Melhor manutenção
- Escalabilidade

**Desvantagens**:
- Complexidade adicional
- Necessidade de entendimento da arquitetura

## 2. Introdução a APIs

### Conceito
Refere-se a serviços que são uma forma de integrar sistemas, possibilitando benefícios como a segurança dos dados, facilidade no intercâmbio entre informações com diferentes linguagens de programação e a monetização de acessos.

### Vantagens
- **Redução de Custos**: Não necessita de muitas aplicações para se conectar com outros serviços, o que melhora a eficiência do serviço.
- **Segurança**: Permite que apenas informações específicas sejam acessadas pelos usuários, usando de API keys e tokens para facilitar esse controle.
- **Melhoria na Comunicação**: Reforça e padroniza a maneira de comunicação dentro da empresa, melhorando as estratégias de desenvolvimento.
- **Volume de Dados**: Consegue acessar somente informações necessárias entre aplicações, restringindo as que não têm utilidade.
- **Controle de Acessos**: Também melhora a segurança possibilitando identificar todos os acessos da aplicação.

## 3. Introdução a HTTP

### Conceito
É um protocolo usado para obter recursos, como por exemplo documentos HTML que vemos e utilizamos diariamente na WEB e além disso servem também para intermediar a comunicação com APIs.

## 4. Estrutura de Pedido e Resposta

### Requests
São criadas pelo cliente (acesso a um Website, chamada para uma API).

### Responses
Retorno do servidor, acompanhadas de status code e informações solicitadas (json).

### HTTP e HTTPS
- **HTTP**: Protocolo baseado em texto.
- **HTTPS**: Garante a segurança das informações através de chaves.

## 5. REST x RESTful

### REST
Estilo de arquitetura que define padrões que facilitam a comunicação entre sistemas via Web, permite que o cliente e o servidor sejam implementados independentemente, sem a necessidade que um tenha conhecimento da implementação do outro. Usa o protocolo HTTP e é baseado em contrato.

### RESTful
Possui os mesmos princípios de REST. A diferença é que a API implementada precisa estar de acordo com todas as regras e restrições definidas para a construção de APIs REST. Em resumo, a API precisa ter um grau de maturidade alto para cumprir todos os critérios de uma API REST definidos por Roy Fielding.

# 5 - Estrutura para reporte de bugs

## Título do Bug 
título claro e conciso que descreva o problema

## Resumo 

descrição resumida do problema encontrado

## Passos para Reproduzir 

Lista detalhada dos passos necessários para reproduzir o bug

1. [Passo 1] 

2. [Passo 2] 

3. [Passo 3] 

## Resultado Esperado 

O que deveria acontecer se o sistema estivesse ok

## Resultado Obtido 

O que realmente aconteceu

## Ambiente 

Informações sobre o ambiente onde o bug foi encontrado (sistema operacional, navegador, versão da aplicação, etc.).

- **Sistema Operacional**: [ex: Windows 10] 

- **Navegador**: [ex: Google Chrome] 

- **Versão da Aplicação**: [ex: 1.0.0] 

## Anexos 

Capturas de tela, logs ou qualquer outro arquivo que ajude a ilustrar o problema.

[Adicione capturas de tela, logs, etc.] 