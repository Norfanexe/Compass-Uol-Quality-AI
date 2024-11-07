# DIA 8 - Introdução ao Postman

## 1. Conceitos de Postman

**Postman** - Ferramenta utilizada para testes de comunicação com APIs. O Postman oferece um ambiente completo para documentação, testes e execução de todo tipo de requisição, além de armazenar o histórico de testes para usos futuros e fornecer respostas detalhadas sobre o response da requisição.

### Propriedades

1. **Collections e Organização**: Mantém uma boa organização das requisições e facilita a visualização das rotas e casos abertos.

2. **Ambientes e Variáveis**: Para dinamizar o teste com diferentes valores de entrada na API, é possível organizar conjuntos variados de dados de entrada através de diferentes ambientes (_environments_) no Postman, permitindo testes produtivos e versáteis.

3. **Configurando Variáveis no Ambiente**:
   - Acessar a área de gestão de ambientes
   - Adicionar um novo ambiente
   - Acessar variáveis globais
   - Acessar variáveis de ambientes existentes

4. **Workspace**: Organiza APIs, collections, ambientes, mocks e outras entidades em ambientes colaborativos. Isso garante que o estado dos recursos permaneça atualizado com as últimas modificações e sincronizado entre todos. Funções extras podem ser liberadas na versão premium.

5. **Corpo da Requisição**: Em uma estrutura geral de requisições (principalmente POST):
   - Pode exigir o envio de dados no corpo (_body_)
   - Pode retornar uma resposta contendo um body com dados.
   
   O Postman permite criar um body para envio e verificar o body recebido como resposta.

6. **Autenticação Básica**: Algumas requisições exigem autenticação prévia para autorizar a execução. O Postman permite criar diferentes métodos de autenticação, conforme o contexto e o tipo de autenticação necessária para a requisição.

7. **Header Query**: Para uma requisição mais segura, é possível atribuir um header com uma chave-valor personalizada. Em alguns casos, dados sensíveis podem ser passados por parâmetros na URL, tornando esta opção mais segura para determinados contextos.

8. **Automação com Postman**: O Postman permite a inserção de scripts de automação para verificações de resposta, reduzindo o tempo necessário para conferir valores e permitindo uma organização dinâmica dos testes realizados.
