# Planejamento de Testes - [R4C] - ROTA CARRINHOS (SERVEREST)

Este documento define o planejamento de testes para a aplicação **API Serverest**, com foco na rota `/carrinhos`, **validação manual** e **automatizada** utilizando **Postman** e na organização de tarefas com o **Jira**.

---

## Conteúdo:

1. [User Stories](#user-stories)
2. [Definition of Ready](#definition-of-ready)
3. [Escopo](#escopo)
4. [Ferramentas Utilizadas](#ferramentas-utilizadas)
5. [Linguagens Utilizadas](#linguagens-utilizadas)
6. [Estratégia de Testes](#estratégia-de-testes)
7. [Planejamento Inicial](#planejamento-inicial)
8. [Accept Criteria](#accept-criteria)
9. [Detalhamento dos Testes](#detalhamento-dos-testes)
   - [Testes para `/carrinhos`](#testes-para-carrinhos)
10. [Evidências de Testes](#evidências-de-testes)
11. [Atualizações e Manutenção](#atualizações-e-manutenção)

---

## 1 - User Stories

* Como um usuário autenticado;
* Eu quero cadastrar um novo carrinho com produtos válidos;
* Para que eu possa realizar uma compra.

---

## 2 - Definition of Ready

* Autenticação: Definição de autenticação de testes disponibilizadas;
* Banco de dados e infraestrutura para desenvolvimento disponibilizados;
* Ambiente de testes disponibilizado.

---

## 3 - Escopo

### Rota Coberta
- **/carrinhos**: CRUD de carrinhos (CRIAR, ATUALIZAR, LISTAR E DELETAR).

### Testes Incluídos
1. Testes manuais no **Postman**.
2. Verificação automática de respostas na aba **Tests** do Postman.
3. Registro de tarefas, defeitos e progresso no **Jira**.

---

## 4 - Ferramentas Utilizadas

- **Jira**: Gerenciamento de tarefas e acompanhamento de progresso.
- **Postman**: Execução de testes manuais e automação básica.
- **GitLab**: Controle de versão do planejamento e scripts de teste.

---

## 5 - Linguagens Utilizadas

- **Markdown**: Linguagem deste arquivo do plano de testes;
- **Gherkin**: Linguagem utilizada para descrever cenários de teste de forma clara e compreensível.

---

## 6 - Estratégia de Testes

1. **Planejamento Inicial no Postman e Jira**:
   - Definição dos cenários de teste.
   - Criação de tarefas no Jira para cada cenário.

2. **Execução dos Testes no Postman**:
   - Realização de testes manuais.
   - Automação de testes utilizando scripts na aba **Tests** do Postman.

3. **Automação**:
   - Implementação de testes automatizados para cenários críticos.

4. **Gestão de Defeitos no Jira**:
   - Registro e acompanhamento de defeitos encontrados durante os testes.

---

## 7 - Planejamento Inicial

| Rota        | Cenário                        | Critérios de Aceitação                                |
|-------------|--------------------------------|-------------------------------------------------------|
| `/carrinhos`| Cadastro com sucesso           | Retornar status 201 Created e dados do carrinho       |
| `/carrinhos`| Listar carrinhos               | Retornar status 200 OK e lista de carrinhos           |
| `/carrinhos`| Buscar carrinho por ID         | Retornar status 200 OK e dados do carrinho            |
| `/carrinhos`| Excluir carrinho com sucesso   | Retornar status 200 OK e mensagem de sucesso          |
| `/carrinhos`| Concluir compra                | Retornar status 200 OK e mensagem de sucesso          |
| `/carrinhos`| Cancelar compra                | Retornar status 200 OK e mensagem de sucesso          |
| `/carrinhos`| Carrinho não encontrado        | Retornar status 404 Not Found                         |
| `/carrinhos`| Token ausente / inválido       | Retornar status 401 Unauthorized                      |

---

## 8 - Accept Criteria

| Requisitos                  | História do usuário                                                                 | Importância | Item do Jira |
|-----------------------------|-------------------------------------------------------------------------------------|-------------|--------------|
| Cadastro de Carrinho        | Deve ser possível cadastrar um novo carrinho com produtos válidos.                  | Alta        | PDTDN-73     |
| Listar carrinhos            | Deve ser possível listar todos os carrinhos cadastrados.                            | Média       | PDTDN-73     |
| Buscar carrinho por ID      | Deve ser possível buscar um carrinho específico pelo seu ID.                        | Média       | PDTDN-74     |
| Concluir Compra             | Deve ser possível concluir a compra, o que exclui o carrinho.                       | Alta        | PDTDN-75     |
| Cancelar Compra             | Deve ser possível cancelar a compra, o que exclui o carrinho e retorna os produtos ao estoque. | Alta        | PDTDN-76     |
| Resposta de Sucesso         | A API deve retornar uma resposta de sucesso (código 200 ou 201) quando uma operação é realizada com sucesso. | Alta       | PDTDN-71     |
| Mensagens de Erro           | A API deve retornar mensagens de erro (códigos 400, 401) quando uma operação falha, como ao tentar cadastrar um carrinho sem autenticação ou com produtos inválidos. | Alta       | PDTDN-71     |
| Validação de Dado           | A API deve validar os dados de entrada, como verificar se os produtos existem e se a quantidade é suficiente. | Alta        | PDTDN-77     |
| Atualização de Estoque      | Ao cadastrar um carrinho, a quantidade dos produtos no estoque deve ser reduzida. Ao cancelar uma compra, a quantidade dos produtos deve ser restabelecida. | Alta        | PDTDN-86; PDTDN-89; PDTDN-78     |
| Exclusão de Carrinho        | Ao concluir ou cancelar uma compra, o carrinho deve ser excluído do sistema.        | Alta        | PDTDN-86; PDTDN-89; PDTDN-78     |

---

## 9 - Detalhamento dos Testes

### Testes para `/carrinhos`

**Cenários Principais**:

- Cadastro de Carrinho
- Listar carrinhos
- Buscar carrinho por ID
- Concluir Compra
- Cancelar Compra
- Resposta de Sucesso
- Mensagens de Erro
- Validação de Dado
- Atualização de Estoque
- Exclusão de Carrinho

---

## 10 - Evidências de Testes

- As evidências serão armazenadas em formato de imagens e logs, com os seguintes detalhes:
  - **Solicitação**: URL, método, cabeçalhos e corpo.
  - **Resposta**: Código de status, corpo e tempo de resposta.
- O arquivo `evidencias/` no repositório GitLab conterá todas as evidências geradas.
- Organização dessas informações será realizada com a ferramenta Jira, facilitando a representação de resultados e cenários de teste.

---

## 11 - Atualizações e Manutenção

---

## Referências

- [Documentação Oficial da API Serverest](https://compassuol.serverest.dev/)
- [Guia do Postman](https://www.postman.com/)
- [Jira Software](https://www.atlassian.com/software/jira)
- [Quality]

---

**Contribuição**: Agradecimento a toda minha equipe e à instituição Compass Uol pela oportunidade de estudos e todo apoio recebido para a estruturação e compreensão de todos os conteúdos aplicados neste planejamento de testes.

 