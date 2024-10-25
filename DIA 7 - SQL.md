
### Tabela `usuarios`

1. **Contar o número de registros na tabela `usuarios`:**
   ```sql
   SELECT COUNT(*) FROM usuarios;
   ```
![SQL_1](/uploads/618e48e167c6af1a4dee13c65af81d02/SQL_1.png)

2. **Encontrar o usuário com o id 10:**
   ```sql
   SELECT * FROM usuarios WHERE id = 10;
   ```
![SQL_2](/uploads/29517813793191eb07b147b9613ff2b8/SQL_2.png)

3. **Encontrar o usuário com o nome "Bruce Wayne":**
   ```sql
   SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';
   ```
![SQL_3](/uploads/a626e408f3b6dd492a2507d79ba5a827/SQL_3.png)

4. **Encontrar o usuário com o e-mail "ghost_silva@fantasma.com":**
   ```sql
   SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com';
   ```
![SQL_4](/uploads/7a2f548d3f6b532584160302ba0597db/SQL_4.png)

5. **Deletar o usuário com o e-mail "peterparker@marvel.com":**
   ```sql
   DELETE FROM usuarios WHERE email = 'peterparker@marvel.com';
   ```
![SQL_5](/uploads/a03af20da2fc6988b628c9c255be2822/SQL_5.png)

### Tabela `produtos`

1. **Apresentar produtos com descrição vazia:**
   ```sql
   SELECT * FROM produtos WHERE descricao = '';
   ```

2. **Apresentar produtos com a categoria "games":**
   ```sql
   SELECT * FROM produtos WHERE categoria = 'games';
   ```

3. **Apresentar produtos com preço "0":**
   ```sql
   SELECT * FROM produtos WHERE preco = 0;
   ```

4. **Apresentar produtos com preço maior que "100.00":**
   ```sql
   SELECT * FROM produtos WHERE preco > 100.00;
   ```

5. **Apresentar produtos com preço entre "1000.00" e "2000.00":**
   ```sql
   SELECT * FROM produtos WHERE preco BETWEEN 1000.00 AND 2000.00;
   ```

6. **Apresentar produtos em que o nome contenha a palavra "jogo":**
   ```sql
   SELECT * FROM produtos WHERE nome LIKE '%jogo%';
   ```
 