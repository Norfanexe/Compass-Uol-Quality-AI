# DIA 1 - ÁGIL

## CONTEÚDO

* 1 - Organização
* 2 - Git e Gitlab
* 3 - ReadMe

# 1 - Organização

A organização é fundamental para atingir os objetivos, seja de estudos, ou para atingir resultados no ambiente de trabalho.
Desde anotações em bloco de notas, até mesmo agendas digitais, a organização fará a produtividade geral aumentar consideravelmente.

## Ferramentas recomendadas:

1. **Notion**

- Notion é um aplicativo da web freemium para produtividade e anotações desenvolvido pela Notion Labs Inc. Ele oferece ferramentas organizacionais, incluindo gerenciamento de tarefas, rastreamento de projetos, listas de tarefas e marcadores . Recursos off-line adicionais são oferecidos por aplicativos de desktop e móveis disponíveis para Windows, macOS, Android e iOS . Os usuários podem criar modelos personalizados, incorporar vídeos e conteúdo da web e colaborar com outras pessoas em tempo real.

2. **Microsoft OneNote**

- O Microsoft OneNote é um programa de computador para o recolhimento de informação de forma livre e colaboração multiusuário. Ele recolhe as notas do usuário (manuscritas ou digitadas), desenhos, recortes de tela e comentários de áudio. As notas podem ser compartilhadas com outros usuários do OneNote através da internet ou por uma rede.

3. **Obsidian**

- Obsidian é um aplicativo de anotações em arquivos que utilizam a linguagem Markdown e se destinam à formação de uma base pessoal de conhecimentos. Ele permite que os usuários façam links internos entre anotações e depois visualizem as conexões como um gráfico. Ele é projetado para ajudar os usuários a organizar e estruturar pensamento e conhecimentos de maneira flexível e não linear. O software é gratuito para uso pessoal, com licenças comerciais disponíveis mediante pagamento.

## 2 - Matriz de Eisenhower

A Matriz de Eisenhower é uma ferramenta de gestão do tempo que ajuda a priorizar tarefas com base em dois critérios: urgência e importância.
a matriz é representada em um plano cartesiano e categoriza as atividades em quatro quadrantes:

## Quadrantes da Matriz de Eisenhower

1. **Importante e Urgente**

   - Tarefas que precisam ser tratadas imediatamente, como crises e prazos iminentes.

2. **Importante, mas Não Urgente**

   - Tarefas que devem ser planejadas e agendadas, como desenvolvimento pessoal e estratégias a longo prazo.

3. **Urgente, mas Não Importante**

   - Tarefas que podem ser delegadas ou minimizadas, pois não contribuem significativamente para os objetivos a longo prazo.

4. **Não Importante e Não Urgente**

   - Tarefas que podem ser evitadas ou realizadas apenas quando todas as outras tarefas mais importantes forem concluídas.

# 2 - Git e Gitlab

## Requisitos

- [ ] Sistema Operacional: Windows, macOS ou Linux
- [ ] acesso a internet
- [ ] (opicional) Familiaridade com comandos em terminal

## Instalação do Git

- Baixar e instalar o `Git` através do `Link`: 
[Link para download](https://git-scm.com/downloads)

## Criar um novo projeto no desktop

* Crie uma nova pasta no desktop com o nome do projeto, por exemplo `Meu projeto git`

* Abrir o editor de código dentro da pasta, neste exemplo, o Vscode

* Criar um arquivo `README.md`

* Em caráter de exemplo, escreva algo para salvar nessa primeira versão do `README.md`, conforme exemplo:

* Salve o arquivo

## Dentro do GitBash

* Inicie `Git Bash` através da opção `Git Bash here` dentro da pasta do projeto

* Execute o comando `Git init` para inicializar o repositório

    ```sh
    git init
    ```
Com este comando, é criado uma pasta `.git`, ao qual **não deve ser apagada**

* Utilize o comando `git add` para transferir os arquivos do repositório para a `staging area`
    ```sh
    git add
    ```
Vale ressaltar, que podemos realizar este comando de duas maneiras:

- git add <nome_do_arquivo> fará a adesão de apenas um único arquivo criado ou atualizado, bastando colocar o nome especifico dele 

- git add . fará a adesão de todos os arquivos criados ou atualizados, bastando colocar o caractere `.` para representar esta ação.

a imagem abaixo demonstra na prática este processo entre transferência da máquina para o repositório online:

* Feito isto, poderá realizar a adição de um ou mais arquivos do seu `repositório local` para o `repositório remoto`

* Para confirmar se o(s) arquivos(s) foram direcionados para a `staging area`, podemos realizar o comando `git status`

    ```sh
    git status
    ```

* Precisamos criar o commit para registrar as ações ou adesões realizadas, para isto, iremos utilizar o comando `git commit`

    ```sh
    git commit -m "descrição das mudanças realizadas"
    ```

## Criando o repositório Online

Para realizarmos a transferência dos arquivos que mantemos na `staring area` diretamente para o `repositório online`, devemos criar um novo `repositório` dentro do `git Lab`.
De forma prática, após criar a sua `conta`, basta clicar dentro do seu perfil em `repositórios` e em seguida, `new`. Conforme na imagem, basta preencher os campos para criar o `repositório`

## Começar a gerenciar o repositório remoto com o comando Git remote e Git push

* A partir do momento que criamos o `repositório online`, podemos transferir aqueles arquivos na `staging area` realizando o comando `Git remote`

    ```sh
    git remote add origin <inserir o link aqui>
    ```

* por fim, realizar o comando `Git push` para enviar as alterações feitas no `repositório local` para o `repositório online`

    ```sh
    git push -u origin main
    ```

    Vale ressaltar, que uma vez executado o comando git push, a conexão entre o projeto local e online já é feita, então, nos próximos versionamentos, basta realizar o mesmo comando, porém, apenas retirando o `-u` do comando.

## Após a criação do projeto e repositório online
Com o `projeto` e o `repositório`repositório criado, podemos daqui em diante gerenciar qualquer atualização e versionar elas do `repositório local` ao `repositório online`

## Principais comandos utilizados no Github

## Verificar a versão instalada do Git
```sh
git --version
```
Exemplo de saída: `git version 2.34.1`

## Inicialização do Repositório
```sh
git init
```
Exemplo: Inicializa um repositório Git vazio na pasta atual.

## Adição de Arquivos
```sh
git add <arquivo>
```
Exemplo: `git add README.md` - Adiciona o arquivo README.md à área de staging.

```sh
git add .
```
Exemplo: Adiciona todos os arquivos modificados à área de staging.

## Commit de Arquivos
```sh
git commit -m "mensagem"
```
Exemplo: `git commit -m "Adiciona arquivo README"` - Cria um commit com a mensagem “Adiciona arquivo README”.

## Renomeação da Branch Principal
```sh
git branch -M main
```
Exemplo: Renomeia a branch principal de “master” para “main”.

## Conexão com o Repositório Remoto
```sh
git remote add origin <URL>
```
Exemplo: `git remote add origin https://github.com/usuario/repo.git` - Adiciona o repositório remoto com a URL especificada.

## Envio de Arquivos para o Repositório Remoto
```sh
git push -u origin main
```
Exemplo: Envia os commits da branch “main” para o repositório remoto.

## Criar e Gerenciar Branches
```sh
git branch
```
Exemplo: `git branch nova-feature` - Cria uma nova branch chamada “nova-feature”.

## Mudar de Branch ou Restaurar Arquivos
```sh
git checkout <branch>
```
Exemplo: `git checkout nova-feature` - Muda para a branch “nova-feature”.

## Combinar Branches
```sh
git merge <branch>
```
Exemplo: `git merge nova-feature` - Combina a branch “nova-feature” com a branch atual.

## Atualizar o Repositório Local com Mudanças do Repositório Remoto
```sh
git pull
```
Exemplo: Atualiza o repositório local com as mudanças do repositório remoto.

## Visualizar o Histórico de Commits
```sh
git log
```
Exemplo: Mostra o histórico de commits do repositório.

## 3 - README

README é um documento que fornece informações importantes sobre um projeto, escrito em Markdown (.md)

## Estrutura de um README

## Título

Seção para o titulo principal do projeto. O título deve ser claro e descritivo.

## Descrição

A descrição explica brevemente o que é o projeto e quais são os principais objetivos.

## Índice

Um índice ajuda os leitores a navegar pelo README. links para as diferentes seções do documento facilitam na navegação geral.

* 1 - Título
* 2 - Descrição
* 3 - Índice
* 4 - Instalação
* 5 - Uso
* 6 - Contribuição
* 7 - Licença
* 8 - Contato

## Instalação

Explica de forma didática como instalar e configurar o projeto. Incluindo se for necessário comandos de terminal.

## Uso

Descrever como usa o projeto, com exemplos de código e capturas de tela para facilitar o aprendizado da usabilidade geral da ferramenta.

## Contribuição

Explique como outros desenvolvedores podem contribuir para o projeto. Inclua diretrizes para pull requests e issues.

## Licença

Inclua a licença sob a qual o projeto está sendo distribuído. Isso é importante para esclarecer os direitos de uso e distribuição.

## Contato

Forneça informações de contato para que os usuários possam tirar dúvidas ou fornecer feedback.

## Recursos Extras e Úteis para um README

- **claro e conciso**: Evitar jargões técnicos desnecessários.

- **exemplos**: Exemplos de código e capturas de tela ajudam a ilustrar o uso do projeto.

- **Manter atualizado**: Atualizar o README sempre que fizer mudanças significativas no projeto.

- **Links Úteis**: Adicionar links para documentação adicional, tutoriais, ou recursos externos que possam ser úteis.

- **FAQ**: Incluair uma seção de Perguntas Frequentes (FAQ) para abordar dúvidas comuns.

- **feedback**: Incentivar usuários a fornecerem feedback e sugestões para melhorias.