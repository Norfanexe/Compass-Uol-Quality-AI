# DIA 2 - ÁGIL

## CONTEÚDO

* 1 - Fundamentos Scrum & Ágile 
* 2 - Epic, Feature and Story
* 3 - O guia do Scrum

# 1 - Fundamentos Scrum & Ágile

## Metodologia Ágil e tradicional

### Método Tradicional (Cascata)

1. **Planejamento Detalhado:** Todas as etapas do projeto são planejadas com antecedência. O escopo, cronograma e orçamento são definidos no início.

2. **Sequencial:** O projeto segue uma sequência linear de fases (iniciação, planejamento, execução, monitoramento e encerramento).

3. **Controle Rigoroso:** Mudanças são difíceis de implementar uma vez que o projeto está em andamento.

4. **Documentação Extensiva:** Requer documentação detalhada em cada fase.

5. **Previsibilidade:** Ideal para projetos com requisitos bem definidos e estáveis.

### Método Ágil

1. **Flexibilidade:** Permite mudanças e adaptações ao longo do desenvolvimento do projeto.

2. **Iterativo e Incremental:** O trabalho é dividido em ciclos curtos chamados sprints, geralmente de 1 a 4 semanas.

3. **Colaboração Contínua:** Envolve feedback constante dos stakeholders e colaboração entre equipes.

4. **Menos Documentação:** Foca mais em entregas funcionais do que em documentação extensa.

5. **Adaptabilidade:** Ideal para projetos com alto grau de incerteza e requisitos que podem evoluir.

## Processo scrum

1. **Ideia/Visão:** O ponto de partida onde uma ideia ou visão do produto é concebida.

2. **Product Backlog:** Lista de funcionalidades, requisitos, melhorias e correções que precisam ser desenvolvidas.

3. **Sprint Backlog:** Itens selecionados do product backlog que serão trabalhados durante o sprint.

4. **Sprint de 2 a 4 semanas:** Cada ciclo de desenvolvimento, conhecido como sprint, dura duas semanas.

5. **Reunião Diária:** Reunião diária onde o progresso é discutido entre os membros da equipe.

6. **Revisão/Retrospectiva:** Avaliação do que foi feito durante o sprint e planejamento de melhorias para os próximos sprints.

## Epic, Feature and Story

Epic, Feature and Story é uma forma de estruturação  utilizada no modelo de trabalho ágil, porém não se restringe somente a esse universo, ajudando na quebra e organização do trabalho a ser realizado em alto, médio ou baixo nível.

# 2 - Estrutura do Epic, Feature and Story

# Epic, Feature and Story – Épico, Funcionalidade e História

A tríade **Epic, Feature and Story** é uma forma de estruturação bastante utilizada no modelo de trabalho ágil, porém não se restringe somente a esse universo. Esse modelo ajuda na quebra e organização do trabalho a ser realizado em alto, médio ou baixo nível.

## História de Usuário

Uma **história de usuário (User Story)** é a representação clara e informal que expressa a necessidade e/ou requisito de um potencial usuário. Também pode ser considerada uma parte de um objetivo final. A User Story é a menor unidade de trabalho com base na necessidade do cliente final que vai utilizar e/ou interagir com o Produto. O Backlog do Produto normalmente é representado por uma lista de histórias ordenadas por valor de negócio. O Dono do Produto é o único responsável pelo Gerenciamento, Priorização e Atualização do Backlog, porém todas as partes envolvidas podem cooperar com suas ideias, sugestões e críticas.

## Funcionalidade

A **Funcionalidade ou Característica (Feature)** é responsável por agrupar um conjunto de histórias de usuário. A Funcionalidade expressa uma função do Produto, da qual contém diversos requisitos funcionais com suas regras e exceções.

A Feature está relacionada a uma Funcionalidade em médio ou alto nível dentro do Produto e por isso precisa de requisitos funcionais e não funcionais expressos por User Story. Quando todas as histórias da Funcionalidade estiverem prontas, considera-se a Feature concluída. A responsabilidade do gerenciamento do Backlog de Features também é do Product Owner e é altamente utilizado para organizar o seu dia a dia. Algumas organizações não utilizam a organização por Features, mas somente a relação Épico x Histórias.

## Épico

O **Épico (Epic)** é uma grande parte do trabalho a ser realizado no Produto. É também conhecido como uma Grande História de Usuário, da qual expressa de forma macro a necessidade global.

O épico representa uma parte integral do Produto e deve ser suficiente para ter valor de negócio em sua utilização. Todos os épicos devem representar a entrega integral do Produto. Os Epics são formados por Features, ou seja, após a entrega de todas as funcionalidades, considera-se que o Épico esteja finalizado. A responsabilidade do Gerenciamento do Backlog do Produto depende do modelo de Projetos da organização a depender da estratégia e direcionamento de Negócio.

Em alguns casos o Product Owner é o próprio responsável, permitindo-o o total empoderamento sobre as decisões. Em outros locais, onde a organização mantém a estratégia do Produto na alta gerência, a responsabilidade do Gerenciamento dos Epics é do Product Manager, Business Owner ou algum profissional equivalente.

## Estudo de Caso

Vamos pensar agora na estruturação do Backlog considerando a tríade de Épico, Funcionalidade e História. Essa organização pode nos ajudar a entender o Produto por subdivisões em rumo à sua completude.

### Exemplo

O Banco da Família decidiu criar um novo produto de Financiamento Estudantil para Ensino Básico Privado. A ideia é ajudar pessoas de baixa renda a conseguirem investir nos estudos das crianças e adolescentes.

Para tal, existem 3 níveis de ensino: Ensino Básico, Ensino Fundamental 1, Ensino Fundamental 2 e Ensino Médio.

Foi solicitada a criação de um Produto interno do Banco para gerenciamento de todo esse financiamento, taxa de retorno, inadimplência, verificação e verificação de crédito, além de permitir o acompanhamento dos Gerentes do Banco na iteração com o cliente e o adolescente. O contexto do Produto se limita ao uso interno do banco, não havendo plataforma de acompanhamento para os usuários externos (clientes finais).

Imaginando toda esta estrutura e com esta Iniciativa/Projeto voltada para a boa imagem do banco e uma taxa de retorno de médio e longo prazo, vamos estruturar um breve Backlog.

## Epics Backlog

Inicialmente deve ser pensado nos possíveis Épicos, ou seja, nas histórias em alto nível e sem muitos detalhes. Aqui não tem uma regra específica se estes épicos serão por linha de negócio, módulos ou por grandes funcionalidades do Produto a ser criado.

Foram pensados os seguintes épicos:

- **Financiamento Estudantil**
- **Acompanhamento de Retorno Financeiro**
- **Validação de Crédito e Controle de Fraudes**
- **Verificação de Inadimplência**
- **Refinanciamento**
- **Relatórios Gerenciais**

## Features Backlog

Uma vez que os épicos foram definidos com base na linha de negócio, serão necessários pensar nas Características e Funcionalidades que cada épico terá. Vamos lembrar aqui que as Features fazem partes do Módulo – que são os épicos – e seu objetivo é completar um épico a partir das suas funcionalidades.

Para expressar exemplos de Features, escolhemos apenas 1 Épico para o exercício não ficar muito complexo:

### Financiamento Estudantil

- **Parametrização de eventos e taxas**
- **Atendimento ao cliente**
- **Registro de Cliente**
- **Registro de Aluno**
- **Registro de Escolas credenciadas**

## Storys Backlog

Por fim, vamos às famosas Histórias de Usuários. Aqui a ideia é pensar em histórias contadas pela perspectiva dos usuários. A história é uma função da Feature e equivale aos requisitos funcionais. Cada história contém suas regras e validações que são expressas pelos critérios de aceite.

Voltando ao exemplo anterior e considerando somente uma das Features levantadas, temos:

### Financiamento Estudantil

#### Registro de Escolas credenciadas

- **Registrar escola**
- **Buscar escola**
- **Editar escola**
- **Remover escola**
- **Buscar diretoria de ensino**
- **Vincular diretoria de ensino**
- **Complementar turmas**
 