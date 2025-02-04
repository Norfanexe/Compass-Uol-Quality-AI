# DIA 4 - GESTÃO DE ISSUES:

## Descrição do Bug

A rota `/produtos` da API ServeRest pode ser acessada mesmo se o usuário não estiver autenticado. Isso permite que qualquer pessoa visualize os produtos sem a necessidade de um token autenticado.

---

### Passos para Reproduzir

1. Abra o Postman.
2. Envie uma requisição **GET** para `{{baseUrl}}/produtos` sem incluir o token de autenticação.
3. Observe que a lista de produtos é retornada com sucesso.

---

### Resultado Esperado

A rota `/produtos` deve retornar um status code **401 (Unauthorized)** quando acessada sem um token de autenticação válido.

---

### Resultado Atual

A rota `/produtos` retorna a lista de produtos mesmo sem um token de autenticação.

---

### Ambiente

- **API ServeRest**: Versão 2.29.5  
- **Postman**: Versão 11.20
- **Sistema Operacional**: [windows 10]  
