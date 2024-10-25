comandos de consultas:

1. **Contar o número de registros existentes**:
   ```json
   db.usuarios.countDocuments({})
   ```

2. **Alterar o usuário com o nome "Teste Start" para "Teste Finish"**:
   ```json
   db.usuarios.updateOne(
     { "nome": "Teste Start" },
     { $set: { "nome": "Teste Finish" } }
   )
   ```

3. **Encontrar o usuário com o nome "Bruce Wayne"**:
   ```json
   db.usuarios.findOne({ "nome": "Bruce Wayne" })
   ```

4. **Encontrar o usuário com o e-mail "ghost_silva@fantasma.com"**:
   ```json
   db.usuarios.findOne({ "email": "ghost_silva@fantasma.com" })
   ```

5. **Deletar o usuário com o e-mail "peterparker@marvel.com"**:
   ```json
   db.usuarios.deleteOne({ "email": "peterparker@marvel.com" })
   ```

comandos de consulta:

1. **Consulta que apresente produtos com descrição vazia**:
   ```json
   db.produtos.find({ "descricao": "" })
   ```

2. **Consulta que apresente produtos com a categoria "games"**:
   ```json
   db.produtos.find({ "categoria": "games" })
   ```

3. **Consulta que apresente produtos com preço "0"**:
   ```json
   db.produtos.find({ "preco": 0 })
   ```

4. **Consulta que apresente produtos com o preço maior que "100.00"**:
   ```json
   db.produtos.find({ "preco": { $gt: 100.00 } })
   ```

5. **Consulta que apresente produtos com o preço entre "1000.00" e "2000.00"**:
   ```json
   db.produtos.find({ "preco": { $gte: 1000.00, $lte: 2000.00 } })
   ```

6. **Consulta que apresente produtos em que o nome contenha a palavra "jogo"**:
   ```json
   db.produtos.find({ "nome": { $regex: "jogo", $options: "i" } })
   ```

 