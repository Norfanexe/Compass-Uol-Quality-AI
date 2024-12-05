# DIA 3 - TESTE API REST

## CONTEÚDO

* 1 - Validações e Boas práticas para testes de APIs
* 2 - Testes Funcionais em API REST
* 3 - Tipos de erros (Back-End)
* 4 - Possíveis métodos de prevenção de erros

# 1 - Validações e Boas práticas para testes de APIs


## Boas práticas em testes de API O primordial no que refere-se a boas práticas em testes de API é simplificar os testes, realizar mais testes em menos tempo, economizar dinheiro e lançar um produto com qualidade. 

### Exemplos de Boas práticas no processo de teste de API: 

- **Estudos**: Para facilitar a rotina de testes, começar com as APIs simples, com apenas uma ou duas entradas (uma API de login, por exemplo) cria confiança e garante que o ambiente de testes funciona corretamente antes de lidar com as APIs maiores. 

- **Documentação**: É essencial ter uma documentação que especifique claramente cada campo e os parâmetros associados. Os testadores consultam a documentação para cobrir todos os casos de uso necessários, facilitando a organização dos processos que serão realizados dentro da API, além de otimizar o tempo de serviço. Criar relatórios de teste detalhados e abrangentes, documentando os motivos das falhas nos testes, facilita para os desenvolvedores identificarem as áreas que precisam ser corrigidas. 

- **Abordagem DRY**: A abordagem "não se repita" (DRY) serve para evitar a repetição de códigos. Se o código for comum a componentes e ações em várias APIs, inclua-o numa biblioteca que seja de fácil acesso a todos que precisarem dele. Fonte: Teste de API: um guia completo | Lucidchart Blog

# 2 - Testes Funcionais em API REST

## 1. Introdução aos Testes Funcionais
Os testes funcionais são essenciais para garantir que a API funcione conforme esperado. Eles verificam se as funcionalidades da API estão operando corretamente e atendendo aos requisitos especificados.

REST é uma forma de acessar recursos que estão em um ambiente específico. Por exemplo, você pode ter um servidor que hospeda documentos, fotos ou vídeos importantes. 

Todos estes são um exemplo de recursos. Se um cliente, digamos um navegador da web, precisar de algum desses recursos, ele deverá enviar uma solicitação ao servidor para acessar esses recursos. Agora os serviços REST definem uma forma de como esses recursos podem ser acessados

## 2. Ferramentas Utilizadas
Para realizar testes funcionais em APIs REST, utilizamos ferramentas como:

- **Postman**: Uma ferramenta popular para testar APIs, que permite criar e executar requisições HTTP de forma simples e eficiente.
- **Insomnia**: Outra ferramenta poderosa para testes de API, conhecida por sua interface intuitiva e funcionalidades avançadas.

## 3. Estratégias de Teste
Existem várias estratégias para realizar testes funcionais em APIs REST, incluindo:

- **Criação de Cenários de Teste**: Definir diferentes cenários para testar as funcionalidades da API em diversas condições.
- **Validação de Respostas da API**: Verificar se as respostas da API estão corretas e conforme o esperado, incluindo códigos de status HTTP, headers e corpo da resposta.

## 4. Exemplo de estrutura de APIREST:

- **Endpoint**: URL que representa o recurso. Exemplo: `https://api.exemplo.com/usuarios` 

- **Métodos HTTP**: 
- **GET**: Recupera informações. Exemplo: `GET /usuarios` (lista todos os usuários) ou `GET /usuarios/{id}` (recupera um usuário específico). 
- **POST**: Cria um novo recurso. Exemplo: `POST /usuarios` (cria um novo usuário). 
- **PUT**: Atualiza um recurso existente. Exemplo: `PUT /usuarios/{id}` (atualiza um usuário específico). - **DELETE**: Remove um recurso. Exemplo: `DELETE /usuarios/{id}` (remove um usuário específico). 
- **Headers**: Informações adicionais enviadas com a solicitação, como autenticação e tipo de conteúdo. 
Exemplo:

{
  "nome": "caju",
  "email": "caju@outlook.com"
}

- **Corpo da Solicitação (Request Body)**: Dados enviados com a solicitação, geralmente em formato JSON. Exemplo para criar um novo usuário:

{
  "nome": "caju",
  "email": "caju@outlook.com"
}

- **Resposta (Response)**: Dados retornados pela API, incluindo código de status HTTP e corpo da resposta. 
Exemplo de resposta para GET /usuarios/{id}:

{
  "id": 1,
  "nome": "caju",
  "email": "caju@outlook.com"
}

- **Exemplos de códigos de Status HTTP**:

200 OK: Solicitação bem-sucedida.

201 Created: Recurso criado com sucesso.

400 Bad Request: Solicitação inválida.

401 Unauthorized: Autenticação necessária.

404 Not Found: Recurso não encontrado.

500 Internal Server Error: Erro no servidor.

# 3 - Tipos de erros (Back-End)

# 4 - Possíveis métodos de prevenção de erros

## Exemplos de cenários de erros:

1. **Erros de Requisitos**
   - **Descrição**: Erros que ocorrem devido a requisitos mal definidos ou incompletos.
   - **Prevenção**:
     - Reuniões de Alinhamento: Realizar reuniões frequentes com stakeholders para garantir que todos os requisitos sejam compreendidos e documentados corretamente.
     - Documentação Detalhada: Manter uma documentação detalhada e atualizada dos requisitos.
     - Prototipagem: Criar protótipos para validar os requisitos com os usuários finais antes de iniciar o desenvolvimento.

2. **Erros de Design**
   - **Descrição**: Erros que surgem devido a falhas no design do sistema.
   - **Prevenção**:
     - Revisões de Design: Realizar revisões de design com a equipe para identificar e corrigir possíveis problemas.
     - Padrões de Design: Utilizar padrões de design reconhecidos para garantir a consistência e a qualidade do design.
     - Ferramentas de Modelagem: Utilizar ferramentas de modelagem para visualizar e validar o design do sistema.

3. **Erros de Implementação**
   - **Descrição**: Erros que ocorrem durante a codificação do sistema.
   - **Prevenção**:
     - Code Reviews: Realizar revisões de código regulares para identificar e corrigir erros de implementação.
     - Pair Programming: Utilizar a técnica de programação em pares para aumentar a qualidade do código.
     - Testes Unitários: Implementar testes unitários para validar o comportamento do código em nível de unidade.

4. **Erros de Integração**
   - **Descrição**: Erros que surgem quando diferentes módulos ou componentes do sistema são integrados.
   - **Prevenção**:
     - Integração Contínua: Utilizar práticas de integração contínua para integrar e testar o código frequentemente.
     - Testes de Integração: Implementar testes de integração para validar a interação entre os diferentes módulos do sistema.
     - Ambiente de Testes: Manter um ambiente de testes que simule o ambiente de produção para identificar problemas de integração.

5. **Erros de Interface**
   - **Descrição**: Erros que ocorrem na interface do usuário, afetando a usabilidade do sistema.
   - **Prevenção**:
     - Testes de Usabilidade: Realizar testes de usabilidade com usuários reais para identificar problemas na interface.
     - Feedback dos Usuários: Coletar feedback contínuo dos usuários para melhorar a interface.
     - Padrões de Interface: Utilizar padrões de design de interface para garantir uma experiência de usuário consistente e intuitiva.

6. **Erros de Desempenho**
   - **Descrição**: Erros que afetam o desempenho do sistema, como lentidão ou consumo excessivo de recursos.
   - **Prevenção**:
     - Testes de Desempenho: Implementar testes de desempenho para identificar e corrigir problemas de desempenho.
     - Monitoramento Contínuo: Monitorar continuamente o desempenho do sistema em produção.
     - Otimização de Código: Otimizar o código e as consultas ao banco de dados para melhorar o desempenho.

7. **Erros de Segurança**
   - **Descrição**: Erros que comprometem a segurança do sistema, como vulnerabilidades a ataques.
   - **Prevenção**:
     - Testes de Segurança: Realizar testes de segurança para identificar e corrigir vulnerabilidades.
     - Práticas de Segurança: Adotar práticas de desenvolvimento seguro, como validação de entrada e criptografia de dados.
     - Auditorias de Segurança: Realizar auditorias de segurança regulares para garantir a conformidade com as melhores práticas de segurança.

