comandos de consultas:

1. **Contar o número de registros existentes**:
   ```json
   db.usuarios.countDocuments({})
   ```
![NOSQL_1](/uploads/57892bca2c3e6be82f3ed05728a73f55/NOSQL_1.jpeg)

2. **Alterar o usuário com o nome "Teste Start" para "Teste Finish"**:
   ```json
   db.usuarios.updateOne(
     { "nome": "Teste Start" },
     { $set: { "nome": "Teste Finish" } }
   )
   ```
![NOSQL2](/uploads/3267046f96ef20725879427364106bc2/NOSQL2.png)

3. **Encontrar o usuário com o nome "Bruce Wayne"**:
   ```json
   db.usuarios.findOne({ "nome": "Bruce Wayne" })
   ```
![NOSQL_3](/uploads/17829c6d9ef0318b87d82ba7bc6f65ca/NOSQL_3.png)

4. **Encontrar o usuário com o e-mail "ghost_silva@fantasma.com"**:
   ```json
   db.usuarios.findOne({ "email": "ghost_silva@fantasma.com" })
   ```
![NOSQL_4](/uploads/9d7d5aac93290683d40f80644d47ce9d/NOSQL_4.png)

5. **Deletar o usuário com o e-mail "peterparker@marvel.com"**:
   ```json
   db.usuarios.deleteOne({ "email": "peterparker@marvel.com" })
   ```
![NOSQL_5](/uploads/4e7d7d99b8fccfd087fa614391eff1c2/NOSQL_5.png)


comandos de consulta:

1. **Consulta que apresente produtos com descrição vazia**:
   ```json
   db.produtos.find({ "descricao": "" })
   ```
![NOSQL_6](/uploads/3ad1aec6350d5fcc6dc848174f62dac7/NOSQL_6.png)

2. **Consulta que apresente produtos com a categoria "games"**:
   ```json
   db.produtos.find({ "categoria": "games" })
   ```
![NOSQL_7](/uploads/a6f0b9cb3ab83da849e4e2c90f6794c9/NOSQL_7.png)

3. **Consulta que apresente produtos com preço "0"**:
   ```json
   db.produtos.find({ "preco": 0 })
   ```
![NOSQL_8](/uploads/fddbdc3b70fa3da012e2c435032fbf1b/NOSQL_8.png)

4. **Consulta que apresente produtos com o preço maior que "100.00"**:
   ```json
   db.produtos.find({ "preco": { $gt: 100.00 } })
   ```
![NOSQL_9](/uploads/b6379760f424efa85aa470bbad4f3d26/NOSQL_9.png)

5. **Consulta que apresente produtos com o preço entre "1000.00" e "2000.00"**:
   ```json
   db.produtos.find({ "preco": { $gte: 1000.00, $lte: 2000.00 } })
   ```
![NOSQL_10](/uploads/03408e32b598a6f22f92471569646378/NOSQL_10.png)

6. **Consulta que apresente produtos em que o nome contenha a palavra "jogo"**:
   ```json
   db.produtos.find({ "nome": { $regex: "jogo", $options: "i" } })
   ```

![NOSQL_11](/uploads/289fe71681e662188604925fc6e84644/NOSQL_11.png)
 