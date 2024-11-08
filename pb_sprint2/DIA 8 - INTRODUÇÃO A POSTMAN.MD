# Dia 8 - Introdução a Postman

## 1 - Conceitos de Postman

**Postman** - Ferramenta utilizada para testes de comunicação com APIs;

Possui ambiente para documentação, testes e todo tipo de requisição.

Consegue registrar e guardar o seu histórico de testes para usos futuros, além de demonstrar uma resposta detalhada sobre o response da requisição.

### Propriedades:

1. **Collections e Organização**: Mantêm uma boa organização das requisições e uma boa visualização das rotas e casos abertos.

2. **Ambientes e Variáveis**: De modo a dinamizar o teste de diferentes valores de entrada na API, realizar a organização de diferentes conjuntos de dados de entrada, através de diferentes ambientes (environments) no Postman é fundamental para um teste produtivo e versátil.

3. **Configurando Variáveis no Ambiente**:
   1. Acessar áreas de gestão de ambientes
   2. Adicionar um novo ambiente
   3. Acessar variáveis globais
   4. Acessar variáveis de ambientes existentes

4. **Workspace**: Organizar as APIs, collections, ambientes, mocks e outras entidades em ambientes colaborativos.

   Com isso, o estado dos recursos se mantém atualizado com as últimas modificações e sincronizando entre todos.

   Funções extras podem ser liberadas na versão premium.

5. **Corpo da Requisição**: Em uma estrutura geral de requisições (principalmente POST):
   1. Podem exigir o envio de dados em corpo (body)
   2. Podem retornar uma resposta contendo um body com dados.

   O Postman permite criar um body de envio para verificar um recebido como resposta.

6. **Autenticação Básica**: Existem requisições específicas que exigem autenticação prévia para autorizar a execução.

   Podemos criar métodos de autenticação diferentes, a depender do contexto, podendo ser escolhido de acordo com o tipo de autenticação necessária para a requisição solicitada.

7. **Header Query**: Para realizar uma requisição mais reservada é atribuir uma header com uma chave-valor personalizada.

   As requisições às vezes podem passar por parâmetros URL com dados sensíveis, o que faz esta opção ser mais segura para certos contextos.

8. **Automação com Postman**: Podemos inserir scripts de automação para realizarmos verificações de resposta em um menor tempo de conferência de valores, permitindo uma organização dinâmica dos testes realizados.

## 2 - Atividade com Postman e API REST

### Instalação e Configuração para Atividade:

1. Instalar o NodeJS para executar a API ServeRest
2. Abrir o terminal e executar o comando: `npx serverest@latest`

Desta forma, a aplicação do ServeRest irá rodar localmente na porta `http://localhost:3000`, você poderá direcionar suas requisições via Postman para esta URL.
