# DIA 6 - Introdução a Atividades de um Analista de Testes e Estrutura de Priorização de Testes em Aplicações Web

## CONTEÚDO

* 1 - Capacidades e Skills de um analista de testes QA
* 2 - Estrutura de Priorização de testes em Web
* 3 - Exemplo de priorização de testes com o site Kabum

# 1 - Capacidades e Skills de um Analista de Testes QA

### Capacidades e Conhecimentos
- **Entendimento dos Processos de Teste de Software**: Conhecer bem as etapas e metodologias de teste.
- **Ferramentas de Teste**: Familiaridade com ferramentas como Selenium, JIRA e outras plataformas de automação e gerenciamento de testes.
- **Metodologias Ágeis**: Compreensão de metodologias ágeis como Scrum e Kanban.

### Hard Skills
- **Automação de Testes**: Habilidade em escrever scripts de automação para testes repetitivos.
- **Programação**: Conhecimento em linguagens de programação como Java, Python ou JavaScript.
- **Análise de Dados**: Capacidade de analisar resultados de testes e identificar padrões ou problemas.

### Soft Skills
- **Comunicação Eficaz**: Ser capaz de comunicar problemas e soluções de forma clara e concisa com a equipe de desenvolvimento.
- **Atenção aos Detalhes**: Ser meticuloso e detalhista para garantir a qualidade do software.
- **Trabalho em Equipe**: Colaborar bem com outros membros da equipe para alcançar objetivos comuns.

# 2 - Estrutura de Priorização de testes em Web

### 1. Apresentação da Aplicação
- **Nome da Aplicação**: `[Nome da aplicação]`
- **Segmento**: `[Segmento da aplicação, por exemplo, E-commerce, Educação, Saúde]`
- **Objetivo Principal do Sistema**: `[Descrição do objetivo principal do sistema]`

### 2. Lista de Fluxos de Validação Prioritários
1. **Cadastro de Usuário**
   - Descrição: `[Descrição detalhada do fluxo de cadastro de usuário]`
   - Prioridade: Alta

2. **Login e Autenticação**
   - Descrição: `[Descrição detalhada do fluxo de login e autenticação]`
   - Prioridade: Alta

3. **Processo de Compra**
   - Descrição: `[Descrição detalhada do fluxo de processo de compra]`
   - Prioridade: Alta

4. **Navegação pelo Catálogo de Produtos**
   - Descrição: `[Descrição detalhada do fluxo de navegação pelo catálogo de produtos]`
   - Prioridade: Média

5. **Finalização de Compra (Checkout)**
   - Descrição: `[Descrição detalhada do fluxo de finalização de compra]`
   - Prioridade: Alta

6. **Suporte ao Cliente**
   - Descrição: `[Descrição detalhada do fluxo de suporte ao cliente]`
   - Prioridade: Média

### 3. Ordenação Lógica dos Fluxos
1. Cadastro de Usuário
2. Login e Autenticação
3. Navegação pelo Catálogo de Produtos
4. Processo de Compra
5. Finalização de Compra (Checkout)
6. Suporte ao Cliente

# 3 - Exemplo de priorização de testes com o site Kabum

1. **Apresentação da Aplicação**

   - **Nome da Aplicação**: KABUM.COM
   - **Segmento**: E-commerce
   - **Objetivo Principal do Sistema**: Site de compras online voltado para tecnologia no geral e varejo, permitindo compras de diversas categorias.

2. **Lista de Fluxos de Validação Prioritários**

### FLUXO 1 - Cadastro de Usuário

   - **Descrição do fluxo**:

1. **Acesso à Página de Cadastro**
   - **Descrição**: O usuário acessa a página de cadastro através do botão "Entre ou cadastre-se", no canto superior direito da tela.
   - **Ação do Usuário**: Clica no botão "Entre ou cadastre-se".
   - **Resultado Esperado**: A página de cadastro é carregada com campos de entrada para as informações do usuário, dando a opção de criar conta (pessoa física ou pessoa jurídica), além de opções de cadastro diretamente com o Google ou Apple.

2. **Preenchimento dos Campos de Cadastro**
   - **Descrição**: O usuário insere suas informações pessoais nos campos obrigatórios e opcionais do formulário de cadastro.
   - **Campos Comuns**:
     - Nome Completo
     - Endereço de E-mail
     - Senha (com confirmação)
     - Data de Nascimento
     - Número de Telefone (opcional)
     - Gênero
     - Como conheceu a loja
   - **Ação do Usuário**: Preenche todos os campos necessários.
   - **Resultado Esperado**: Todos os campos são validados em tempo real para garantir que os dados inseridos estão no formato correto. Caso algum dado obrigatório esteja incorreto ou faltante, o site notifica quais campos restam para preenchimento ou correção.

3. **Aceitação dos Termos e Condições**
   - **Descrição**: Durante o processo de criação da conta, o usuário lê e aceita os termos e condições de uso do site, bem como a política de privacidade.
   - **Ação do Usuário**: Marca as duas caixas de seleção para aceitar os termos e condições.
   - **Resultado Esperado**: A seleção é registrada, e o botão de continuar é ativado.

4. **Submissão do Formulário**
   - **Descrição**: O usuário envia o formulário de cadastro para a criação da conta.
   - **Ação do Usuário**: Clica no botão "Criar conta".
   - **Resultado Esperado**: O sistema valida todas as informações e cria a conta do usuário, redirecionando-o para uma página de boas-vindas ou para o painel do usuário, além de uma notificação de e-mail enviado para validar o cadastro.

5. **Confirmação por E-mail**
   - **Descrição**: O sistema envia um e-mail de confirmação para o endereço fornecido pelo usuário para verificar a autenticidade do e-mail.
   - **Ação do Usuário**: O usuário abre o e-mail e clica no link de confirmação.
   - **Resultado Esperado**: A conta do usuário é ativada, permitindo o acesso completo ao site.

   - **Prioridade**: Alta

### FLUXO 2 - LOGIN NO SITE

2. **Login e Autenticação**
   - **Descrição**: Acessando o botão "Entrar ou cadastrar", abaixo do próximo menu, terá uma opção destacada escrita "Entrar". Ao clicar, o usuário irá digitar suas credenciais de login.
   - **Ações do Usuário**: Ele irá digitar os dados cadastrados anteriormente para validar o seu acesso ao site, sendo eles:
     - E-mail, CPF ou CNPJ
     - Senha
     - Acessar por Google
     - Acessar por Apple
   - **Resultado Esperado**: Apresentar a tela de menu inicial novamente, com o botão de "Entrar ou cadastrar", desta vez, preenchido com "Olá, (nome do usuário), MINHA CONTA".

   - **Prioridade**: Alta
