## 1 - COMO CRIAR UMA ISSUES NO GITLAB:

### Passo 1: Acessar o Projeto

1. **Login no Jira**: Faça login na sua conta do Jira.
2. **Selecionar o Projeto**: Na barra lateral, selecione o projeto onde você deseja criar a issue. Se você não tiver um projeto, crie um novo clicando em **"Create Project"** e siga as instruções para configurar seu projeto.

### Passo 2: Criar uma Nova Issue

1. **Botão Criar**: Clique no botão **"Criar"** na barra de navegação superior. Isso abrirá um formulário de criação de issue.
2. **Selecionar Tipo de Issue**: Escolha o tipo de issue que deseja criar (por exemplo, Bug, Tarefa, História de Usuário). O tipo de issue pode variar dependendo da configuração do seu projeto.
3. **Preencher Detalhes da Issue**:
    - **Resumo**: Insira um título claro e conciso que descreva a issue. Exemplo: "Erro ao salvar dados do usuário".
    - **Descrição**: Adicione uma descrição detalhada da issue, incluindo qualquer informação relevante, como passos para reproduzir o problema, resultados esperados e reais. Use formatação Markdown para melhorar a legibilidade.
    - **Prioridade**: Defina a prioridade da issue (por exemplo, Alta, Média, Baixa). Isso ajuda a equipe a entender a importância da issue.
    - **Responsável**: Atribua a issue a um membro da equipe. Se você não souber quem deve ser o responsável, pode deixar como "Unassigned" e atribuir mais tarde.
    - **Componentes**: Selecione os componentes relevantes do projeto, se aplicável. Componentes ajudam a categorizar a issue dentro do projeto.
    - **Etiquetas**: Adicione etiquetas para categorizar e filtrar issues facilmente. Exemplo: "frontend", "backend".
    - **Versão**: Selecione a versão do software em que a issue foi encontrada ou será resolvida.
    - **Ambiente**: Descreva o ambiente onde o problema ocorreu, incluindo sistema operacional, navegador, versão do software, etc.

### Passo 3: Adicionar Anexos e Subtarefas

1. **Adicionar Anexos**: Se necessário, adicione anexos como capturas de tela, logs ou documentos que ajudem a entender melhor a issue. Clique no ícone de clipe de papel para anexar arquivos.
2. **Criar Subtarefas**: Se a issue for complexa, você pode criar subtarefas para dividi-la em partes menores. Clique em **"Create Subtask"** e preencha os detalhes para cada subtarefa.

### Passo 4: Configurar Campos Personalizados (Opcional)

- **Campos Personalizados**: Dependendo da configuração do seu projeto, você pode ter campos personalizados adicionais para preencher. Esses campos podem incluir informações específicas do projeto ou do processo de trabalho da sua equipe.

### Passo 5: Salvar a Issue

1. **Salvar**: Após preencher todos os detalhes, clique em **"Criar"** para salvar a issue. A issue será adicionada ao backlog do projeto.
2. **Verificar a Issue**: A issue criada aparecerá na lista de issues do projeto. Verifique se todas as informações estão corretas e faça ajustes, se necessário.

### Passo 6: Acompanhar e Atualizar a Issue

1. **Acompanhar Progresso**: Monitore o progresso da issue através do quadro Kanban ou Scrum do Jira. Mova a issue entre as colunas conforme o trabalho avança.
2. **Adicionar Comentários**: Use a seção de comentários para fornecer atualizações, fazer perguntas ou adicionar informações adicionais sobre a issue.

## 2 - ESTRATÉGIAS DE TESTE

### Tipos de Issue

### Melhoria
É quando um determinado requisito é identificado no sistema que ainda não está implementado mas pode ser implementado para gerar um benefício ao cliente. Por exemplo, o sistema, hoje, gera relatórios com informações baseadas na data escolhida pelo usuário. Mas poderia existir a opção de escolher a data e o local.

### BUG
É quando uma determinada funcionalidade do sistema não está funcionando como foi definido pelo cliente. Por exemplo, o botão salvar não está executando nenhuma ação ao clicar. Ou, uma determinada tela do sistema não está sendo carregada conforme o layout especificado pelo cliente.

### Status de Execução de um Caso de Teste
- **Aberto**: Caso de teste criado que ainda não foi executado.
- **Em execução**: Está sendo executado (testado).
- **Passou**: Foi executado e está sem bugs abertos vinculados ao fluxo.
- **Falhou**: Foi executado sendo encontrado bugs no fluxo (Todo status de falha deverá estar vinculado ao bug criado durante a execução).
- **Bloqueado**: Alguma ação externa está bloqueando a execução do fluxo. Ex.: Massa de dados específica que deverá ser entregue pelo cliente, como CPF/CNPJ de usuário da loja que possua algum dado que não conseguimos criar através da nossa aplicação e que só existe na base do cliente.
- **Cancelado**: Não será executado, geralmente ocorre quando a funcionalidade foi retirada do escopo do projeto.

### Report de Teste
Quando estamos homologando o sistema, criamos bugs para os problemas localizados durante a homologação. Durante a etapa de aceite, o cliente vai abrir também solicitações do tipo bug para verificação. Podemos criar uma issue para essas solicitações do cliente, o tipo issue de aceitação, assim fica mais fácil a rastreabilidade do que foi aberto pela equipe interna ou cliente.

### Como Identificar uma Solicitação do Cliente
O problema encontrado é um bug ou uma melhoria? Para responder a esse questionamento, lembre-se sempre que a melhoria deve ser sugerida para proporcionar algum benefício no software, enquanto o erro impactará na obtenção de um resultado diferente do esperado. Uma melhoria deverá ser avaliada pela gestão do projeto para verificação se será ou não implementada nessa etapa.

### Classificar o Bug
Os bugs podem ocorrer devido a vários motivos e devemos localizar a causa raiz:
- **Dev**: O bug pode ter ocorrido devido a uma falha no desenvolvimento da demanda.
- **Análise**: Especificações funcionais e técnicas elaboradas erroneamente ou que não suprem a necessidade do cliente.
- **Massa**: Inconsistência nos dados utilizados para testes.
- **Ambiente**: Falha no ambiente que está sendo utilizado para testes. Nesse caso, pode ser necessário entrar em contato com a fornecedora do produto ou administrador do sistema.

## 3 - Gestão de Defeitos no Teste de Software

Há quem diga que encontrar defeitos é a finalidade exclusiva do Teste de Software, mas não é bem assim. O grande objetivo do Teste é garantir qualidade ao sistema, o que não quer dizer que o mesmo vai ser entregue ao cliente sem nenhum problema. Garantir qualidade significa minimizar os riscos e deixar o produto final com o menor número de erros possível.

**Risco** é a probabilidade de insucesso, em função de algum acontecimento eventual, incerto, cuja ocorrência não depende exclusivamente da vontade dos interessados. Para evitar os defeitos, diminuir os riscos torna-se fundamental. Afinal, quanto menor o risco, menor a probabilidade de encontrar bugs. 

Essa afirmação deve ser aplicada tanto para o projeto de desenvolvimento de software, como para o de Teste. Seria perfeito se os defeitos não existissem, e os bugs jamais impedissem o bom funcionamento de um software. No entanto, enquanto não chegamos a essa situação ideal, gerenciar os defeitos produzidos torna-se essencial.

Mudanças no processo de desenvolvimento de software ocorrem a todo o momento, por inúmeras razões, como restrições de tempo e custo, novas possibilidades de negócios e alteração nas necessidades de clientes. Em função disso, saber identificar a importância dos defeitos é fundamental para entender o impacto que eles causarão no sistema e nos negócios da empresa.

Por isso, é importante que a gestão de defeitos seja realizada, pois a mesma possibilita uma visão geral e consequentemente um melhor acompanhamento do andamento do projeto, através da verificação dos bugs registrados.

Neste contexto, a qualidade do sistema pode ser medida a partir dos bugs encontrados durante todo o seu ciclo de vida, desde a fase de projeto, até ser colocado efetivamente em produção. E para que os bugs sejam gerenciados com sucesso, é necessário que a gestão de defeitos seja utilizada de maneira simples, tornando-se de fundamental importância dentro de um processo de Teste de Software.

### Processo de Gestão de Defeitos

Para facilitar o entendimento da gestão de defeitos, é necessário, antes de tudo, esclarecer alguns conceitos. Muitas pessoas confundem o significado de defeito, erro e falha. Mas afinal, qual a diferença entre eles?

Segundo o **Syllabus**, livro base para obtenção da Certificação Foundation Level, da **International Software Testing Qualification (ISTQB)**, a diferença pode ser representada através da Figura 1. Como podemos ver na representação da Figura 1, os defeitos são resultados de erros existentes no sistema ou em outros artefatos desenvolvidos por seres humanos e que podem provocar falhas nos softwares.

A explicação de cada conceito é resumida em:

- **Erro (Engano)**: Ação humana que produz resultados incorretos, como por exemplo, a implementação errada de um algoritmo.
- **Defeito (Bug)**: Falha em um sistema que pode ocasionar uma anomalia ao tentar desempenhar sua devida função. Exemplo: omissão de informações e cálculos incorretos.
- **Falha**: Ação inesperada no software. Exemplo: o sistema apresenta resultados diferentes do planejado.

### Questões Importantes sobre Bugs

Além da definição do que é um bug, outras questões devem estar bem claras para toda a equipe:

1. **O problema encontrado é um defeito ou uma melhoria?**
   - Lembre-se sempre que a melhoria deve ser sugerida para proporcionar algum benefício no software, enquanto o erro impactará na obtenção de um resultado diferente do esperado.

2. **O quão crítico é o bug?**
   - Cada bug encontrado deve ser classificado de acordo com a sua criticidade. Para isso, é essencial definir qual será o impacto no projeto caso o problema não seja resolvido.
