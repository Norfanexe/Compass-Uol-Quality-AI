# Planejamento de Testes - API Serverest

Documento para o planejamento de testes para a aplicação **API Serverest**. O planejamento abrange as rotas `/login`, `/usuarios`, e `/produtos`, com foco na **validação manual** e **automatizada** utilizando **Postman** e na organização de tarefas com o **Jira**.

---

## Conteúdo:

1. [Introdução](#introdução)
2. [Objetivos](#objetivos)
3. [Escopo](#escopo)
4. [Ferramentas Utilizadas](#ferramentas-utilizadas)
5. [Linguagens utilizadas] (#linguagens-utilizadas)
6. [Estratégia de Testes](#estratégia-de-testes)
7. [Planejamento Inicial](#planejamento-inicial)
8. [Detalhamento dos Testes](#detalhamento-dos-testes)
   - [Testes para `/usuarios`](#testes-para-usuarios)
   - [Testes para `/login`](#testes-para-login)
   - [Testes para `/produtos`](#testes-para-produtos)
9. [Evidências de Testes](#evidências-de-testes)
10. [Atualizações e Manutenção](#atualizações-e-manutenção)

---

## 1 - Introdução

Este planejamento é baseado na análise da **API ServeRest** e utiliza como ferramentas neste planejamento, o **jira** , e para a realização dos testes, a ferramenta **Postman**. O objetivo é criar um plano inicial para a execução de testes automatizados e manuais, considerando as rotas `/usuarios`, `/login`, e `/produtos`.

---

## 2 - Objetivos

- Garantir a qualidade das funcionalidades das rotas `/usuarios`, `/login`, e `/produtos`.
- Identificar e corrigir possíveis defeitos na aplicação.
- Gerar evidências para validação dos testes.
- Facilitar a automação de testes futuros.

---

## 3 - Escopo

### Rotas Cobertas
- **/usuarios**: CRUD de usuários (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- **/login**: Autenticação de usuários;
- **/produtos**: CRUD de produtos (CRIAR, ATUALIZAR, LISTAR E DELETAR).

### Testes Incluídos
1. Testes manuais no **Postman**.
2. Verificação automática de respostas na aba **Tests** do Postman.
3. Registro de tarefas, defeitos e progresso no **Jira**.

---

## 4 - Ferramentas Utilizadas

- **Jira**: Gerenciamento de tarefas e acompanhamento de progresso.
- **Postman**: Execução de testes manuais e automação básica.
- **GitLab**: Controle de versão do planejamento e scripts de teste.

## 5 - Linguagens utilizadas
- **Markdown**: Linguagem deste arquivo do plano de testes;
- **Gherkin**: Linguagem utilizada para descrever cenários de teste de forma clara e compreensível.

---

## 6 - Estratégia de Testes

1. **Planejamento Inicial no Postman e Jira**:
   - xxxxxxxxxx
   - xxxxxxxxxx

2. **Execução dos Testes no Postman**:
   - xxxxxxxxxxx
   - xxxxxxxxxxx

3. **Automação**:
   - xxxxxxxxxxxx

4. **Gestão de Defeitos no Jira**:
   -xxxxxxxxxxxxx

---

## 7 - Planejamento Inicial

| Rota       | Cenário                       | Critérios de Aceitação                           |
|------------|-------------------------------|--------------------------------------------------|
| `/usuarios`| Cadastro de usuário válido    | Retornar status 201 e detalhes do usuário criado |
| `/usuarios`| Cadastro com dados inválidos  | Retornar status 400 e mensagem de erro clara     |
| `/login`   | Login com credenciais válidas | Retornar token de autenticação válido            |
| `/login`   | Login inválido                | Retornar status 401 com mensagem de erro         |
| `/produtos`| Cadastro de produto válido    | Retornar status 201 e detalhes do produto criado |
| `/produtos`| Consulta de produto por ID    | Retornar status 200 e detalhes do produto        |

---

## 8 - Detalhamento dos Testes

### Testes para `/usuarios`

**Cenários Principais**:
- Cadastro de um novo usuário.
- Validação de campos obrigatórios.
- Atualização de informações de um usuário existente.
- Exclusão de usuário.

### Testes para `/login`

**Cenários Principais**:
- Login com credenciais corretas.
- Login com usuário inexistente.
- Tentativa de login sem fornecer senha.

### Testes para `/produtos`

**Cenários Principais**:
- Cadastro de um produto com dados válidos.
- Atualização de informações de um produto.
- Exclusão de um produto existente.

---

## 9 - Evidências de Testes

- As evidências serão armazenadas em formato de imagens e logs, com os seguintes detalhes:
  - **Solicitação**: URL, método, cabeçalhos e corpo.
  - **Resposta**: Código de status, corpo e tempo de resposta.
- O arquivo `evidencias/` no repositório GitLab conterá todas as evidências geradas.

---

## 10 - Atualizações e Manutenção

24/11/2024 - Iniciado estruturação do **arquivo do plano de testes** em linguagem **Markdown** para registrar o processo;

xx/xx/xxxx - xxxxxx

---

## Referências

- [Documentação Oficial da API Serverest](https://compassuol.serverest.dev/)
- [Guia do Postman](https://www.postman.com/)
- [Jira Software](https://www.atlassian.com/software/jira)
- [Quality]

---

**Contribuição**: Agrecimento a toda minha equipe e a instituição Compass Uol pela oportunidade de estudos e todo apoio recebido para a estruturação e compreensão de todos os contéudos.