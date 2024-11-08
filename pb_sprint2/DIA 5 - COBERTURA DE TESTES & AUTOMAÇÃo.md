# DIA 5 – Cobertura de Testes de APIs & Testes Candidatos à Automação

## CONTEÚDO

* 1 - Introdução a coberturas de teste de APIs
* 2 - Introdução a Postman
* 3 - Cobertura de testes em API Rest
* 4 - Métodos para Testes candidatos à automação
* 5 - Critérios de Priorização de Testes

# 1 - Introdução a Cobertura de Testes de APIs

### Definição de Cobertura de Testes

Cobertura de testes é uma métrica que indica a quantidade de código ou funcionalidades que foram testadas em um projeto de software.  
Ela ajuda a garantir que todas as partes importantes do software sejam verificadas.

### Importância da Cobertura de Testes

- **Identificação de Lacunas**: Ajuda a identificar partes do código que ainda não foram testadas.
- **Melhoria da Qualidade**: Garante que todas as funcionalidades importantes sejam verificadas, melhorando a qualidade do software.
- **Redução de Riscos**: Reduz o risco de bugs e falhas no software, garantindo que ele funcione conforme o esperado.

## Cobertura de Testes de APIs REST

### Principais Ferramentas para Medir a Cobertura de Testes

- **Postman**: Uma ferramenta popular para testar APIs que também oferece recursos para medir a cobertura de testes.
- **Swagger**: Uma ferramenta que facilita a documentação e o teste de APIs, ajudando a garantir que todas as funcionalidades sejam verificadas.
- **JUnit**: Uma ferramenta de teste para Java que pode ser utilizada para medir a cobertura de testes de APIs REST desenvolvidas em Java.

### Tipos de Cobertura de Testes

- **Cobertura de Caminhos (Path Coverage)**: Verifica a cobertura dos endpoints da API, garantindo que todos estejam cobertos pelos testes.

- **Cobertura de Operadores (Operator Coverage)**: Confere a cobertura de todos os métodos da API (GET, POST, PUT, DELETE, etc.).

- **Cobertura de Parâmetros (Parameter Coverage)**: Verifica a cobertura dos parâmetros existentes em cada método da API.

- **Cobertura de Valores de Parâmetros (Parameter Value Coverage)**: Confere a cobertura dos valores de parâmetros booleanos e enums nas operações.

- **Cobertura de Content-Type (Content-Type Coverage)**: Verifica a cobertura dos testes automatizados onde o `Content-Type` está sendo exibido em cada endpoint.

- **Fluxo de Operações (Operation Flow)**: Mede a cobertura de acordo com as sequências de operações executadas.

- **Cobertura de Propriedades do Corpo da Resposta (Response Properties Body Coverage)**: Mede os parâmetros no corpo da resposta.

- **Cobertura de Códigos de Status (Status Code Coverage)**: Verifica quais códigos de status em cada endpoint estão cobertos pelos testes.

# 2 - Introdução a Postman

# 3 - Cobertura de testes em API rest

# Cobertura de testes de APIs

## 1. Importância dos Testes de API Rest
Os testes de API Rest são essenciais para garantir que as APIs funcionem corretamente e atendam às expectativas dos usuários. Com a crescente demanda por profissionais especializados, entender como medir a cobertura de testes é uma habilidade valiosa no mercado de trabalho.

## 2. Cobertura de Testes
A cobertura de testes refere-se à medida de quanto do código da API foi testado. Existem diferentes métodos para calcular essa cobertura, incluindo:
- **Cobertura de Linhas**: Mede a porcentagem de linhas de código que foram executadas durante os testes.
- **Cobertura de Funções**: Avalia quantas funções ou métodos foram chamados durante os testes.
- **Cobertura de Condições**: Verifica se todas as condições lógicas (como if-else) foram testadas.

### Exemplo Prático
Imagine que você tem uma API que calcula a soma de dois números. Um teste básico seria verificar se a API retorna o resultado correto para diferentes pares de números. Para medir a cobertura de testes, você pode usar ferramentas como o Postman ou Insomnia para enviar requisições e verificar as respostas.

## 3. Ferramentas e Recursos
Existem várias ferramentas que podem ajudar a medir a cobertura de testes de API Rest, como:

- **Postman**: Uma ferramenta popular para testar APIs, que permite criar e executar testes automatizados.
- **Insomnia**: Outra ferramenta útil para testar APIs, com uma interface amigável e recursos avançados.
- **Swagger**: Uma ferramenta de documentação que também pode ser usada para testar APIs.

# 3 - Cobertura de Testes de API's

# Cobertura de testes de APIs

## Path Coverage (input)
Verifica a cobertura da suíte de testes de acordo com os endpoints que a API possui. Este critério é importante, pois ao receber uma solicitação, o programa pode executar caminhos diferentes, então precisamos garantir que os endpoints da API REST estão cobertos pelos testes. A análise é realizada pela quantidade de URI (URL + URN (Resource name)) que a API possui (se for a mesma URI para métodos diferentes, considera-se apenas um). O ideal é realizar ao menos uma requisição para verificar cada endpoint.

### Exemplo de cálculo:
Suponha que a automação desta API tenha apenas 6 desses endpoints implementados, mas a API possui 13 endpoints. Para calcular a cobertura: quantidade de testes automatizados / quantidade de endpoints na API REST. 

(ex: 6/13 = 0,46 (46%)) 

Então 46% dos testes de path estão cobertos pela automação.

## Operator Coverage (input)
Confere a cobertura de testes de todos os métodos existentes na API REST (GET, POST, PUT, DELETE…). Então, deve-se verificar quais métodos da API foram cobertos pela automação de testes.

### Exemplo de cálculo:
Vamos supor que dezesseis métodos tiveram testes automatizados implementados. Para calcular a cobertura: quantidade de operações da API automatizadas / quantidade total de operações da API REST.

(ex: 16/19 = 0,84 (84%)) 

Então temos 84% dos testes de operações cobertos.

## Parameter Coverage (input)
Verifica a cobertura de uma suíte de testes conforme os parâmetros existentes em cada método da API.

### Exemplo de cálculo:
Para atingir 100% de cobertura de testes é necessário testar todos os parâmetros de entrada de cada operação pelo menos uma vez. Realizar a combinação de todos os parâmetros é desejável, mas não estritamente necessário para chegar a 100% de cobertura. Suponha que a API tenha um total de 5 parâmetros, e na automação da API os 5 parâmetros foram cobertos. Quantidade total de parâmetros cobertos na suíte de testes / quantidade total de parâmetros nos métodos da API. 

(ex: 5/5 = 1 (100%))

## Parameter Value Coverage (input)
Confere a cobertura da suíte de testes de parâmetros booleano e enum nas operações (se existirem).

### Exemplo de cálculo:
Quantidade total de valores diferentes enviados / quantidade total de valores que podem assumir. Para atingir 100% de cobertura cada parâmetro booleano e enum deve assumir todos os valores possíveis.

## Content-Type Coverage (input e output)
Verifica a cobertura de testes automatizados onde o content-type está sendo exibido em cada endpoint, ou seja, se for demonstrado nas opções do content-type de envio application/json e um application/xml, então duas opções do parâmetros de envio deveriam ser cobertas.

### Exemplo de cálculo:
Suponha a API possua as operações POST, PUT, GET e DELETE. POST e PUT possuem cada um 2 opções de content-type, logo a API possui um total de 4 content-type a serem cobertos. A automação cobriu apenas uma opção, no POST e uma opção, no PUT. Sendo assim 

(ex: 2/4 = 0,5 (50%))

## Operation Flow (input)
Este critério mede um conjunto de testes de acordo com as sequências de operações que é executado.

### Exemplo de cálculo:
Fluxo1: Post-Get(id)
Fluxo2: Post-Put
Fluxo3: Post-Delete
Fluxo4: Post-Get(Query)

Se todos os fluxos estiverem implementados no teste automatizado, então a API Rest está 100% coberta pela automação. Porém se é possível criar 4 tipos de fluxos, mas sua automação possui apenas um, por exemplo, criação (Post) e consulta (Get id), então terás apenas 25% de cobertura. 

(ex: 1/4 = 0,25 (25%))

## Response Properties Body Coverage (Output)
Este critério mede os parâmetros no corpo da resposta, então deve ser verificado se todas as propriedades da resposta estão cobertas pelo teste. Para calcular a cobertura deve-se dividir o número total de todas as propriedades de todos os objetos que pode ser obtido na resposta da API, pelo número de propriedades da resposta que os testes estão cobrindo.

## Status Code Coverage (Output)
Este critério verifica quais status codes existentes em cada endpoint estão cobertos pelos testes.

### Exemplo de cálculo:
Suponha que a API tenha um total de 25 status code, e na automação da API apenas 15 status code foram cobertos. 

(ex: 15/25 = 0,6 (60%)) 

Portanto, para atingir 100% da cobertura de testes, todos os status codes de cada operação deve estar implementado nos testes.

Realizar o levantamento dos critérios de cobertura é importante, pois te dá um norte para saber o quão efetivos os testes automatizados estão sendo. Será que todos os paths da sua API estão cobertos? Será que não é possível atingir 100% de cobertura de parâmetros de entrada dos métodos? Comenta aí, o que você achou desta metodologia ou se você aplicaria e mostraria a cobertura de testes para o seu time.

# 4 - Métodos para testes candidatos a automação

## O que é automação de testes de API?

A automação de testes de API, também conhecida como testes automatizados de API ou testes de automação de API, refere-se ao processo de automatização de testes de API por meio da criação e execução de scripts automatizados ou casos de teste. 

Essa automação simula interações de API de forma programática, envia solicitações para endpoints de API e valida respostas automaticamente sem intervenção manual. Seu objetivo é agilizar os testes e garantir a confiabilidade, funcionalidade e desempenho das APIs.

## Componentes de testes automatizados de API
Equipes abrangentes de testes automatizados de API para agilizar seus fluxos de trabalho, aumentar a eficiência e fornecer APIs de alta qualidade. As principais funcionalidades da API que precisam ser testadas incluem:

- **Envio de solicitações**: Automatização do envio de solicitações HTTP, incluindo solicitações GET, POST, PUT, DELETE e PATCH, para endpoints de API para simular interações de clientes e acionar funcionalidades de API.
- **Teste de endpoint**: Automatizar a validação de endpoints de API individuais para garantir o tratamento preciso de vários tipos de solicitações e respostas.
- **Validação de entrada**: Automatizando testes para verificar diferentes cenários de entrada, incluindo casos válidos, inválidos e extremos, garantindo a aplicação adequada das regras de validação de entrada.
- **Verificação de resposta**: Automatizando verificações para validar a correção, integridade e consistência das respostas, incluindo campos de dados, códigos de status, cabeçalhos e mensagens de erro.
- **Tratamento de erros**: Testes automatizados para avaliar como o API lida com erros e exceções, garantindo o fornecimento de respostas de erro significativas e códigos de status apropriados.
- **Autenticação e autorização**: Validação automatizada de mecanismos de autenticação, como chaves de API e tokens OAuth, para garantir que apenas pessoas autorizadas acessem os endpoints da API.
- **Integridade de dados**: Verificações automatizadas para confirmar o processamento preciso de dados sem perda ou corrupção, incluindo validação, criptografia e conversão de formato.
- **Simultaneidade e desempenho**: Testes automatizados para avaliar o desempenho da API sob diversas cargas, medindo tempos de resposta, rendimento e uso de recursos.

# 5 - Critérios de Priorização de Testes:
- **Risco e Impacto**: Priorize testes que cobrem funcionalidades críticas e de alto risco. Isso garante que as partes mais importantes do sistema sejam testadas primeiro.
- **Frequência de Uso**: Funcionalidades que são usadas com mais frequência pelos usuários devem ser testadas prioritariamente.
- **Complexidade**: Funcionalidades mais complexas têm maior probabilidade de conter erros, então devem ser priorizadas.
- **Histórico de Defeitos**: Áreas do sistema que historicamente apresentaram mais defeitos devem ser testadas com prioridade.

## Planejamento de Testes:
- **Estratégia de Testes**: Defina uma estratégia clara que inclua os critérios de priorização, ferramentas a serem usadas, e o escopo dos testes.
- **Suíte de Casos de Teste**: Crie uma suíte de casos de teste que cubra os cenários mais importantes e críticos.
- **Automação de Testes**: Identifique quais testes são bons candidatos para automação com base nos critérios de priorização.

## Ferramentas e Recursos:
- **Postman**: Ferramenta para testar APIs, que permite criar e executar testes automatizados.
- **Swagger**: Ferramenta de documentação que também pode ser usada para testar APIs.
- **GitLab**: Para versionamento de código e documentação dos testes.

## Exemplo Prático:
- **Planejamento**: Suponha que você está planejando testes para uma API de e-commerce. Priorize os testes das funcionalidades de pagamento e carrinho de compras, pois são críticas para o negócio.
- **Automação**: Utilize o Postman para automatizar os testes dessas funcionalidades, garantindo que cada endpoint e método (GET, POST, PUT, DELETE) seja coberto.

## Documentação e Análise:
- **Mapas Mentais**: Use mapas mentais para organizar e visualizar os cenários de teste.
- **Issues no GitLab**: Documente problemas encontrados e sugestões de melhorias no GitLab.
