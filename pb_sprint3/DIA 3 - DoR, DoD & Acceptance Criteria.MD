# REFINANDO CONHECIMENTOS SOBRE QA

## CONTEÚDO

* 1 - USER STORY E CRITÉRIOS DE ACEITE
* 2 - xxxxxxxxxxx
* 3 - xxxxxxxxxxx

## 1 - USER STORY E CRITÉRIOS DE ACEITE

### O que é uma User Story?

Uma User Story descreve uma funcionalidade que tem valor para o usuário de forma simples e clara. Ela deve responder às seguintes perguntas:

- **Quem é o ator?** Ou seja, quem utilizará a funcionalidade?
- **Qual a ação que o ator executará?**
- **Qual o objetivo da ação?**

### Exemplo de User Story:
**Como** um cliente da operadora de saúde  
**Eu quero** procurar um médico pelo nome  
**Para** obter o endereço do consultório

**Quem?** Ator: cliente da operadora de saúde  
**O que?** Ação: procurar um médico pelo nome  
**Por quê?** Objetivo: obter o endereço do consultório

### Características de uma boa User Story

Uma boa User Story tem as seguintes características:

- **Independente**: A independência entre as User Stories facilita a priorização e a estimativa.
- **Negociável**: Pode ser renegociada para responder às mudanças.
- **Valiosa**: Deve trazer valor ao negócio do usuário.
- **Estimável**: Deve ser possível determinar o tempo necessário para entregá-la.
- **Pequena**: Deve caber em um sprint.
- **Testável**: O sucesso no teste é que vai garantir que a User Story foi desenvolvida corretamente.

### O que é um Épico?

Um **Épico** é uma User Story muito grande que levaria mais de um sprint para ser desenvolvida. Um Épico deve ser quebrado em User Stories menores que possam ser desenvolvidas em um sprint.

### Exemplos de User Stories derivadas de um Épico:

- Como cliente do banco desejo consultar o extrato da minha conta corrente para verificar meu saldo e os lançamentos realizados.
- Como cliente do banco desejo consultar a fatura do meu cartão de crédito para saber quanto terei que pagar.
- Como cliente do banco desejo realizar o pagamento de um boleto para quitar uma conta.
- Como cliente do banco desejo agendar uma transferência de dinheiro mensalmente da minha conta corrente para a poupança, para garantir o cumprimento da minha meta de economia no mês.

### O que são Critérios de Aceitação?

Os **critérios de aceitação** têm o objetivo de:

- Definir limites para as User Stories
- Ajudar o P.O. a detalhar em alto nível o que é necessário para entregar valor ao cliente
- Ajudar o time a entender melhor o objetivo da User Story
- Ajudar programadores e testadores a planejarem os testes
- Informar ao programador quando parar de adicionar funcionalidades à User Story

### O que são bons critérios de aceitação?

Bons critérios de aceitação:

- São escritos com menor nível de detalhamento
- São independentes de implementação
- Definem o que fazer e não como fazer

### Exemplo de User Story e Critérios de Aceitação

**User Story:**

Como um operador de marcação de consulta  
Eu gostaria de visualizar a agenda de consultas dos médicos  
Para saber quais horários estão disponíveis para novas marcações.

**Critérios de aceitação:**

- Eu quero ter opções de visualização da agenda por dia, semana e mês.
- Eu quero visualizar a agenda de consultas do mês atual e do mês posterior.
- Cada consulta agendada deve mostrar o nome e o convênio do paciente.

## 2 - User Story: Desmistificando a Escrita da User Story

## 1. Estória ou História de Usuário?

O termo em inglês *User Story* refere-se a um requisito documentado no formato de uma história fictícia. Em português, embora "estória" fosse usada no passado para narrativas ficcionais, caiu em desuso. Assim, o termo correto para se referir ao conceito é **história de usuário**.

## 2. Por que escrever histórias de usuário?

A escrita de histórias de usuário permite:

- Orientar o time de desenvolvimento sobre o que construir, para quem e por quê.
- Contextualizar quem é o usuário, suas dores e necessidades.
- Estabelecer expectativas e resultados esperados.

### 3. Existe um padrão de escrita na história de usuário?

### Template mais utilizado:

- **Como** [persona/autor]
- **Eu quero** [funcionalidade desejada]
- **Para** [valor agregado ou resultado esperado]

### Técnicas:

### 3W (Who, What, Why):

1. **Who (Quem)**: Persona alvo da funcionalidade.
2. **What (O quê)**: A funcionalidade desejada.
3. **Why (Por quê)**: O motivo ou valor esperado pela funcionalidade.

### 3C (Card, Conversation, Confirmation):

1. **Card (Cartão)**: Uma User Story deve ser concisa, cabendo em um cartão.
2. **Conversation (Conversa)**: A história deve gerar discussões e alinhamentos entre o time.
3. **Confirmation (Confirmação)**: Deve conter critérios de aceitação para validar a entrega.

### Exemplo:

- **Como** vendedor,
- **Eu quero** visualizar os produtos da loja,
- **Para** ver sua quantidade em estoque.

### 4. Refinando uma história de usuário

### Técnica INVEST

Acrônimo que descreve as principais características de uma boa história de usuário:

1. **Independent (Independente)**: Não deve ter dependências com outras histórias.
2. **Negotiable (Negociável)**: Aberta a ajustes conforme necessidade.
3. **Valuable (Valiosa)**: Representa valor para o usuário final.
4. **Estimable (Estimável)**: Deve ser possível estimar o esforço para sua realização.
5. **Small (Pequena)**: História pequena, passível de ser entregue em uma iteração.
6. **Testable (Testável)**: Possibilita definição clara de testes para validação.

### Exemplo de refinamento:

- **User Story inicial:**
  - Como vendedor,
  - Eu quero visualizar os produtos da loja,
  - Para ver sua quantidade em estoque.

- **Divisão em partes menores:**
  1. Cadastrar produtos no sistema.
  2. Atualizar o estoque ao registrar vendas.
  3. Gerar relatórios de produtos em estoque.

### 5. Critérios de Aceitação (Acceptance Criteria)

Critérios de aceitação são checklists que garantem que a história entrega o valor planejado. Podem ser escritos como:

- Listas de tópicos.
- Cenários de uso.

### 6. Definição dos Cenários em Histórias de Usuário

Cenários podem ser definidos utilizando técnicas como BDD (Behavior Driven Development):

### Exemplo:

- **Cenário 1: Gerar relatório de produtos em estoque.**
  - Dado que o vendedor esteja logado no sistema,
  - E possua permissão para gerar relatórios,
  - Quando clicar em "Relatório de Produtos em Estoque",
  - Então deve conseguir gerar o relatório.

### 7. Definição das Tarefas para as Histórias de Usuário (Tasks)

As tasks descrevem as ações necessárias para a implementação da User Story.

### Exemplo de tarefas para a User Story "visualizar produtos em estoque":

1. Criar perfil de usuário “vendedor”.
2. Criar permissão de geração de relatórios.
3. Criar funcionalidade “Relatório de Produtos em Estoque”.

### 8. Criação das Interfaces com o Usuário

Interfaces podem ser representadas em:

- **Baixa fidelidade**: Rabiscos ou desenhos simples.
- **Média fidelidade**: Wireframes com estrutura básica.
- **Alta fidelidade**: Protótipos navegáveis.

### 9. Como incluir o refinamento na minha rotina de trabalho?

- **Refinamento de negócio**: Para alinhar objetivos e expectativas.
- **Refinamento técnico**: Para detalhamento e validação com o time.
- **Cadência**: Refinar itens das duas próximas sprints, garantindo organização e clareza.

### 10. Dicas importantes sobre a escrita de histórias de usuário

1. Defina personas específicas.
2. Adapte o formato às necessidades do time.
3. Seja objetivo e claro.
4. Inclua critérios de aceitação e cenários de teste.
5. Use o acrônimo INVEST para guiar sua escrita.

### 11. Assimilando os conceitos sobre histórias de usuário

- Histórias de usuário devem ser simples e ágeis.
- O detalhamento técnico ocorre no refinamento.
- Use a metáfora da cebola: camadas externas têm menos detalhes; camadas próximas ao núcleo são refinadas e prontas para desenvolvimento.

## 3 - Não confunda DoR, DoD, Critérios de Aceite 

### 1. Definition of Ready (DoR)

O **Definition of Ready** é um acordo entre o time de Desenvolvimento e o Product Owner. Ele define quando uma User Story está suficientemente detalhada e pronta para entrar em uma Sprint.

### Características principais:

- Garante que o item do backlog esteja bem descrito e compreendido pelo time antes do planejamento.
- Reduz o impacto de itens mal especificados durante a Sprint.
- Exige disciplina para refinamento constante do backlog.

### Exemplo de DoR:

Uma User Story está "pronta" quando:

- ◻️ Foi escrita seguindo o padrão **INVEST**.
- ◻️ Contém pelo menos um critério de aceite.
- ◻️ Possui um wireframe de baixa fidelidade (se necessário).

### 2. Definition of Done (DoD)

O **Definition of Done** é um conjunto de critérios genéricos que define quando um incremento de software pode ser considerado completo. Ele é aplicável a todas as User Stories e garante transparência e alinhamento entre os membros do time.

### Características principais:

- Funciona como uma lista de verificação.
- Aumenta a qualidade do produto entregue.
- É definido e compartilhado por todo o time.

### Exemplo de DoD:

Uma User Story está "done" quando:

- ◻️ Todas as funcionalidades foram testadas.
- ◻️ Testes unitários foram criados e aprovados.
- ◻️ Todos os critérios de aceite foram atendidos.
- ◻️ Funcionalidades foram testadas em navegadores como Chrome, IE e Firefox.
- ◻️ O código foi revisado por outro desenvolvedor.

### 3. Critérios de Aceite

Os **Critérios de Aceite** são específicos para cada User Story. Eles descrevem as condições que devem ser atendidas para que a funcionalidade seja aceita pelo Product Owner.

### Características principais:

- Variam de acordo com a User Story.
- Servem como guia para validação da funcionalidade.

### Exemplo de Critérios de Aceite:

- **Iniciante**: ✔️ Exibir os dois últimos e-mails não lidos ao acessar a caixa de entrada.
- **Avançado (BDD)**: ✔️ Dado que o cliente ainda não recebeu nenhum e-mail,  
Quando o cliente acessar o painel,  
Então a mensagem "nenhum email anterior" será exibida.

### 4. Diferenças entre DoR, DoD e Critérios de Aceite

| Aspecto                | **DoR**                                 | **DoD**                                 | **Critérios de Aceite**                        |
|------------------------|-----------------------------------------|-----------------------------------------|------------------------------------------------|
| **Objetivo**            | Garantir que o item está pronto para ser planejado. | Garantir que o incremento está completo. | Validar se a funcionalidade atende ao esperado. |
| **Aplicação**           | No início do planejamento da Sprint.    | Ao final da implementação.              | Durante a validação da funcionalidade.         |
| **Abrangência**         | Genérico para todo o backlog.           | Genérico para todas as User Stories.    | Específico para cada User Story.               |

### 5. Quando criar DoR e DoD?

- Idealmente, o time deve criar o DoR e o DoD antes da primeira Sprint.
- Caso não existam, a retrospectiva é um ótimo momento para discutir e criá-los.

### 6. Quem é responsável?

- **DoR**: Responsabilidade principal do Product Owner, com apoio do time.
- **DoD**: Criado em conjunto pelo time de Desenvolvimento e Product Owner.

### 7. Ponto de Comparação Prático

**Tarefa: Lavar a Louça**

- **DoR**:
  - ◻️ Louça foi recolhida.
  - ◻️ Pia está desobstruída.
  
- **DoD**:
  - ◻️ Louça lavada, seca e guardada.
  - ◻️ Pia limpa e seca.
  
- **Critério de Aceite**:
  - ✔️ "A pia deve estar limpa e organizada sem louça visível após o término."

### 8. Dicas para Implementação

- **Personalização**: Cada time pode e deve personalizar seu DoR e DoD.
- **Inspeção e Adaptação**: Utilize as retrospectivas para ajustar os critérios.
- **Refinamento Contínuo**: Reserve até 10% do tempo da Sprint para refinar o backlog.
