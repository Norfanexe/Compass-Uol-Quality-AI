
### Tabela `usuarios`

1. **Contar o número de registros na tabela `usuarios`:**
   ```sql
   SELECT COUNT(*) FROM usuarios;
   ```

2. **Encontrar o usuário com o id 10:**
   ```sql
   SELECT * FROM usuarios WHERE id = 10;
   ```

3. **Encontrar o usuário com o nome "Bruce Wayne":**
   ```sql
   SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';
   ```

4. **Encontrar o usuário com o e-mail "ghost_silva@fantasma.com":**
   ```sql
   SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com';
   ```

5. **Deletar o usuário com o e-mail "peterparker@marvel.com":**
   ```sql
   DELETE FROM usuarios WHERE email = 'peterparker@marvel.com';
   ```

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
 