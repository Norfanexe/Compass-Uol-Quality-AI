# DIAS 8 E 9 - NEWMAN

# Guia de Instalação e Uso do Newman com Postman e API ServeRest

## 1. Instalar Node.js
Por ser uma extensão de Node.js, é necessário ter o Node.js instalado na máquina. Você pode fazer o download [aqui](https://nodejs.org/).

## 2. Instalar o Newman
Instale o Newman globalmente usando o npm (gerenciador de pacotes do Node.js), executando o comando:
```bash
npm install -g newman
```

## 3. Exportar a Coleção do Postman
1. Selecione a coleção que deseja exportar, neste caso, a ServeRest.
2. Clique nos três pontos ao lado do nome da coleção e selecione "Exportar".
3. Escolha o formato "Collection v2.1" e salve o arquivo JSON.

## 4. Executar a Coleção com o Newman
Navegue até o diretório onde o arquivo JSON foi salvo e execute o comando:
```bash
newman run <nome-da-colecao>.json
```

## 5. Gerar Relatórios
O Newman permite gerar relatórios em diferentes formatos, como CLI, JSON, JUnit e HTML. Para gerar um relatório HTML, você pode usar o seguinte comando:
```bash
npm install -g newman-reporter-html
newman run serverest-collection.json -r html
```

## Códigos Utilizados na Rota de Teste Carrinhos, Utilizando as Rotas Login e Carrinhos

### ROTA 1 - POST/http://localhost:3000/Login
**Parameters:**
```json
{
  "email": "{{email_teste}}",
  "password": "{{senha_test}}"
}
```

**Scripts:**
```javascript
// 1 - Definindo o Token do login gerado como variável global
const resposta = pm.response.json();
const tokenCompleto = resposta.authorization;
const token = tokenCompleto.split(" ")[1];
pm.globals.set("token", token);

// Teste 1 - Retornar Status code 200 OK
pm.test("Retornar Status code 200 OK", function () {
    pm.response.to.have.status(200);
});

// Teste 2 - O tempo de retorno foi menor que 200ms
pm.test("O tempo de retorno foi menor que 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});

// Teste 3 - Verificar se o cabeçalho da resposta é application/json
pm.test("Verificar se o cabeçalho da resposta é application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

// Teste 4 - A resposta contém os campos necessários (Message e Authorization)
pm.test("A resposta contém os campos necessários (Message e Authorization)", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.message).to.exist;
    pm.expect(responseData.authorization).to.exist;
});
```

**BODY:**
```json
{
    "message": "Login realizado com sucesso",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlMTIzNCIsImlhdCI6MTczMzU3ODM2NCwiZXhwIjoxNzMzNTc4OTY0fQ.KmVe4hGPON8U7YJa8XwPF1rdGBIJYTslZeRxnAKOohA"
}
```

**TEST RESULT:**
```plaintext
PASSED
Retornar Status code 200 OK
PASSED
O tempo de retorno foi menor que 200ms
PASSED
Verificar se o cabeçalho da resposta é application/json
PASSED
A resposta contém os campos necessários (Message e Authorization)
```

### ROTA 2 - POST/http://localhost:3000/Carrinhos

### JSON
```json
{
  "produtos": [
    {
      "idProduto": "rVZhs3pDIR7OeZlE",
      "quantidade": 1
    }
  ]
}
```

### Script de Teste
```javascript
// Teste 1 - Verificar se o token de autorização está presente
pm.test("Verificar se o token de autorização está presente", function () {
    pm.expect(pm.request.headers.has("Authorization")).to.be.true;
});

// Teste 2 - Retornar Status code 201 created
pm.test("Retornar Status code 201 created", function () {
    pm.response.to.have.status(201);
});

// Teste 3 - Verificar se body da resposta foi sucesso
pm.test("Verificar se body da resposta foi sucesso", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.message).to.eql("Cadastro realizado com sucesso");
    pm.expect(responseData._id).to.exist;
});
```

### BODY
```json
{
    "message": "Cadastro realizado com sucesso",
    "_id": "COZUDv4zRrtGCCKd"
}
```

### Test Result
```plaintext
PASSED
Verificar se o token de autorização está presente
PASSED
Retornar Status code 201 created
PASSED
Verificar se body da resposta foi sucesso
```

### ROTA 3 - GET/http://localhost:3000/{{iD do carrinho}}

### Script Test
```javascript
// Teste 1 - Verificar se o token de autorização está presente
pm.test("Verificar se o token de autorização está presente", function () {
    pm.expect(pm.request.headers.has("Authorization")).to.be.true;
});

// Teste 2 - Retornar Status code 200 OK
pm.test("Retornar Status code 200 OK", function () {
    pm.response.to.have.status(200);
});

// Teste 3 - Verificar se body da resposta retornou com sucesso
pm.test("Verificar se body da resposta retornou com sucesso", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.produtos).to.be.an('array');
    pm.expect(responseData.produtos[0].idProduto).to.eql("rVZhs3pDIR7OeZlE");
    pm.expect(responseData.produtos[0].quantidade).to.eql(1);
    pm.expect(responseData.produtos[0].precoUnitario).to.eql(480);
    pm.expect(responseData.precoTotal).to.eql(480);
    pm.expect(responseData.quantidadeTotal).to.eql(1);
    pm.expect(responseData.idUsuario).to.eql("0uxuPY0cbmQhpEz1");
    pm.expect(responseData._id).to.eql("7kCupIX5AHlrcxzC");
});
```

### Response
```json
{
    "produtos": [
        {
            "idProduto": "rVZhs3pDIR7OeZlE",
            "quantidade": 1,
            "precoUnitario": 480
        }
    ],
    "precoTotal": 480,
    "quantidadeTotal": 1,
    "idUsuario": "0uxuPY0cbmQhpEz1",
    "_id": "COZUDv4zRrtGCCKd"
}
```

### Test Result
```plaintext
PASSED
Verificar se o token de autorização está presente
PASSED
Retornar Status code 200 OK
PASSED
Verificar se body da resposta retornou com sucesso
```

### ROTA 4 - GET/http://localhost:3000/carrinhos

### Script Test
```javascript
// Teste 1 - Verificar se o token de autorização está presente
pm.test("Verificar se o token de autorização está presente", function () {
    pm.expect(pm.request.headers.has("Authorization")).to.be.true;
});

// Teste 2 - Retornar Status code 200 OK
pm.test("Retornar Status code 200 OK", function () {
    pm.response.to.have.status(200);
});

// Teste 3 - Verificar se body da resposta contém os campos esperados
pm.test("Verificar se body da resposta contém os campos esperados", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.carrinhos).to.be.an('array');
    if (responseData.carrinhos.length > 0) {
        pm.expect(responseData.carrinhos[0]).to.have.property('produtos');
        pm.expect(responseData.carrinhos[0]).to.have.property('precoTotal');
        pm.expect(responseData.carrinhos[0]).to.have.property('quantidadeTotal');
        pm.expect(responseData.carrinhos[0]).to.have.property('idUsuario');
        pm.expect(responseData.carrinhos[0]).to.have.property('_id');
    }
});

// Teste 4 - Confirmar se todos os carrinhos possuem produtos válidos
pm.test("Confirmar se todos os carrinhos possuem produtos válidos", function () {
    const responseData = pm.response.json();
    responseData.carrinhos.forEach(carrinho => {
        pm.expect(carrinho.produtos).to.be.an('array');
        carrinho.produtos.forEach(produto => {
            pm.expect(produto).to.have.property('idProduto');
            pm.expect(produto).to.have.property('quantidade');
            pm.expect(produto).to.have.property('precoUnitario');
        });
    });
});

// Teste 5 - Confirmar se os preços totais e quantidades totais estão corretos
pm.test("Confirmar se os preços totais e quantidades totais estão corretos", function () {
    const responseData = pm.response.json();
    responseData.carrinhos.forEach(carrinho => {
        let precoTotalCalculado = 0;
        let quantidadeTotalCalculada = 0;
        carrinho.produtos.forEach(produto => {
            precoTotalCalculado += produto.precoUnitario * produto.quantidade;
            quantidadeTotalCalculada += produto.quantidade;
        });
        pm.expect(carrinho.precoTotal).to.eql(precoTotalCalculado);
        pm.expect(carrinho.quantidadeTotal).to.eql(quantidadeTotalCalculada);
    });
});
```

### Response
```json
{
    "quantidade": 1,
    "carrinhos": [
        {
            "produtos": [
                {
                    "idProduto": "rVZhs3pDIR7OeZlE",
                    "quantidade": 1,
                    "precoUnitario": 480
                }
            ],
            "precoTotal": 480,
            "quantidadeTotal": 1,
            "idUsuario": "0uxuPY0cbmQhpEz1",
            "_id": "COZUDv4zRrtGCCKd"
        }
    ]
}
```

### Test Result
```plaintext
PASSED
Verificar se o token de autorização está presente
PASSED
Retornar Status code 200 OK
PASSED
Verificar se body da resposta contém os campos esperados
PASSED
Confirmar se todos os carrinhos possuem produtos válidos
PASSED
Confirmar se os preços totais e quantidades totais estão corretos
```

### ROTA 5 - DELETE/http://localhost:3000/carrinhos/cancelar-compra

### Script Test
```javascript
// Teste 1 - Verificar se o token de autorização está presente
pm.test("Verificar se o token de autorização está presente", function () {
    pm.expect(pm.request.headers.has("Authorization")).to.be.true;
});

// Teste 2 - Retornar Status code 200 OK
pm.test("Retornar Status code 200 OK", function () {
    pm.response.to.have.status(200);
});

// Teste 3 - Verificar se body da resposta retornou com sucesso
pm.test("Verificar se body da resposta retornou com sucesso", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.message).to.eql("Registro excluído com sucesso. Estoque dos produtos reabastecido");
});

// Teste 4 - Validar retorno do produto ao estoque
pm.test("Validar retorno do produto ao estoque", async function () {
    const response = await pm.sendRequest({
        url: "http://localhost:3000/produtos/rVZhs3pDIR7OeZlE",
        method: "GET",
        header: {
            "Authorization": pm.request.headers.get("Authorization")
        }
    });

    const produto = response.json();
    pm.expect(produto.quantidade).to.be.above(0); // Verifica se a quantidade do produto é maior que 0
});
```

### Response
```json
{
    "message": "Registro excluído com sucesso. Estoque dos produtos reabastecido"
}
```

### Test Result
```plaintext
PASSED
Verificar se o token de autorização está presente
PASSED
Retornar Status code 200 OK
PASSED
Verificar se body da resposta retornou com sucesso
PASSED
Validar retorno do produto ao estoque
```

### ROTA 6 - DELETE/http://localhost:3000/carrinhos/concluir-compra

### Script Test
```javascript
// Teste 1 - Verificar se o token de autorização está presente
pm.test("Verificar se o token de autorização está presente", function () {
    pm.expect(pm.request.headers.has("Authorization")).to.be.true;
});

// Teste 2 - Retornar Status code 200 OK
pm.test("Retornar Status code 200 OK", function () {
    pm.response.to.have.status(200);
});

// Teste 3 - Verificar se body da resposta retornou com sucesso
pm.test("Verificar se body da resposta retornou com sucesso", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.message).to.eql("Registro excluído com sucesso");
});
```

### Response
```json
{
    "message": "Registro excluído com sucesso"
}
```

### Test Result
```plaintext
PASSED
Verificar se o token de autorização está presente
PASSED
Retornar Status code 200 OK
PASSED
Verificar se body da resposta retornou com sucesso
```
 